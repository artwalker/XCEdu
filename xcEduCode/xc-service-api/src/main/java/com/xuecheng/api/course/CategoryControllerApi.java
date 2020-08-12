package com.xuecheng.api.course;

import com.xuecheng.framework.domain.course.ext.CategoryNode;
import io.swagger.annotations.ApiOperation;

/**
 * @author HackerStar
 * @create 2020-08-11 13:47
 */
public interface CategoryControllerApi {
    @ApiOperation("查询分类")
    public CategoryNode findList();
}
