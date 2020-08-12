package com.xuecheng.manage_course.dao;

import com.xuecheng.framework.domain.course.ext.CategoryNode;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author HackerStar
 * @create 2020-08-11 13:49
 */
@Mapper
public interface CategoryMapper {
    //查询分类
    public CategoryNode selectList();
}
