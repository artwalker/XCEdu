package com.xuecheng.api.course;

import com.xuecheng.framework.domain.course.CoursePub;
import com.xuecheng.framework.domain.course.TeachplanMediaPub;
import com.xuecheng.framework.domain.search.CourseSearchParam;
import com.xuecheng.framework.model.response.QueryResponseResult;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.io.IOException;
import java.util.Map;

/**
 * @author HackerStar
 * @create 2020-08-25 11:42
 */
@Api(value = "课程搜索", description = "课程搜索", tags = {"课程搜索"})
public interface EsCourseControllerApi {
    @ApiOperation("根据课程计划查询媒资信息")
    public TeachplanMediaPub getmedia(String teachplanId);

    @ApiOperation("课程搜索")
    public QueryResponseResult<CoursePub> list(int page, int size, CourseSearchParam courseSearchParam) throws IOException;

    @ApiOperation("根据课程id查询课程信息")
    public Map<String, CoursePub> getall(String id);
}
