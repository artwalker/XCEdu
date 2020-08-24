package com.xuecheng.manage_cms.web.controller;

import com.xuecheng.api.cms.CmsPageControllerApi;
import com.xuecheng.framework.domain.cms.CmsPage;
import com.xuecheng.framework.domain.cms.request.QueryPageRequest;
import com.xuecheng.framework.domain.cms.response.CmsPageResult;
import com.xuecheng.framework.domain.cms.response.CmsPostPageResult;
import com.xuecheng.framework.model.response.QueryResponseResult;
import com.xuecheng.framework.model.response.ResponseResult;
import com.xuecheng.manage_cms.service.PageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author HackerStar
 * @create 2020-07-24 09:19
 */
@RestController
@RequestMapping("/cms/page")
public class CmsPageController implements CmsPageControllerApi {
    @Autowired
    private PageService pageService;

    @Override
    @GetMapping("/list/{page}/{size}")
    public QueryResponseResult findList(@PathVariable("page") int page, @PathVariable("size") int size, QueryPageRequest queryPageRequest) {
//        //暂时采用测试数据，测试接口是否可以正常运行
//        QueryResult queryResult = new QueryResult();
//        queryResult.setTotal(2);
//        //静态数据列表
//        List list = new ArrayList();
//        CmsPage cmsPage = new CmsPage();
//        cmsPage.setPageName("测试页面");
//        list.add(cmsPage);
//        queryResult.setList(list);
//        QueryResponseResult queryResponseResult = new QueryResponseResult(CommonCode.SUCCESS, queryResult);
//        return queryResponseResult;
        return pageService.findList(page, size, queryPageRequest);
    }

    //添加页面
    @Override
    @PostMapping("/add")
    public CmsPageResult add(@RequestBody CmsPage cmsPage) {
        return pageService.add(cmsPage);
    }

    @Override
    @GetMapping("/get/{id}")
    public CmsPage findById(@PathVariable String id) {
        return pageService.getById(id);
    }

    @Override
    @PutMapping("/edit/{id}") // 这里使用put方法，http方法中put表示更新
    public CmsPageResult edit(@PathVariable String id, @RequestBody CmsPage cmsPage) {
        return pageService.update(id, cmsPage);
    }

    @Override
    @DeleteMapping("/del/{id}")
    //使用http的delete方法完成岗位操作
    public ResponseResult delete(@PathVariable String id) {
        return pageService.delete(id);
    }

    @Override
    @PostMapping("/postPageQuick")
    public CmsPostPageResult postPageQuick(@RequestBody CmsPage cmsPage) {
        return pageService.postPageQuick(cmsPage);
    }

    @Override
    @PostMapping("/save")
    public CmsPageResult save(@RequestBody CmsPage cmsPage) {
        return pageService.save(cmsPage);
    }
}
