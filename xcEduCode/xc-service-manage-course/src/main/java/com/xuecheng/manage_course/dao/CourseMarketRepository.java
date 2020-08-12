package com.xuecheng.manage_course.dao;

import com.xuecheng.framework.domain.course.CourseMarket;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author HackerStar
 * @create 2020-08-11 18:40
 */
public interface CourseMarketRepository extends JpaRepository<CourseMarket, String> {
}