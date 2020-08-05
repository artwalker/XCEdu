package com.xuecheng.manage_cms.dao;

import com.xuecheng.framework.domain.cms.CmsConfig;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author HackerStar
 * @create 2020-08-04 13:22
 */
public interface CmsConfigRepository extends MongoRepository<CmsConfig, String> {
}
