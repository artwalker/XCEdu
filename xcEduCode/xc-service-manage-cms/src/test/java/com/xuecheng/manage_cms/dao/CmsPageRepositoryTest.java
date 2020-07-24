package com.xuecheng.manage_cms.dao;

import com.xuecheng.framework.domain.cms.CmsPage;
import com.xuecheng.framework.domain.cms.CmsPageParam;
import com.xuecheng.manage_cms.dao.CmsPageRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @author HackerStar
 * @create 2020-07-24 09:52
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class CmsPageRepositoryTest {
    @Autowired
    private CmsPageRepository cmsPageRepository;

    //分页测试
    @Test
    public void testFindPage() {
        int page = 0; //从0开始
        int size = 10; // 每页记录数
        Pageable pageable = PageRequest.of(page, size);
        Page<CmsPage> all = cmsPageRepository.findAll(pageable);
        System.out.println(all);
    }

    //添加
    @Test
    public void testInsert() {
        //定义实体类
        CmsPage cmsPage = new CmsPage();
        cmsPage.setSiteId("s01");
        cmsPage.setTemplateId("t01");
        cmsPage.setPageName("测试页面");
        cmsPage.setPageCreateTime(new Date());

        List<CmsPageParam> cmsPageParams = new ArrayList<>();

        CmsPageParam cmsPageParam = new CmsPageParam();
        cmsPageParam.setPageParamName("param1");
        cmsPageParam.setPageParamValue("value1");
        cmsPageParams.add(cmsPageParam);
        cmsPage.setPageParams(cmsPageParams);
        cmsPageRepository.save(cmsPage);
        System.out.println(cmsPage);
    }

    //删除
    @Test
    public void testDelete() {
        cmsPageRepository.deleteById("5f1a437894c82a8187d22f4f");
    }

    //修改
    @Test
    public void testUpdate() {
        //查询对象
        Optional<CmsPage> optional = cmsPageRepository.findById("5f1a437894c82a8187d22f4f");
        if (optional.isPresent()) {
            CmsPage cmsPage = optional.get();
            //设置要修改值
            cmsPage.setPageAliase("test01");
            //...
            //修改
            CmsPage save = cmsPageRepository.save(cmsPage);
            System.out.println(save);
        }
    }

}
