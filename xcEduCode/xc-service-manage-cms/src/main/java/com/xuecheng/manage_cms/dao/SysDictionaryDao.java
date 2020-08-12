package com.xuecheng.manage_cms.dao;

import com.xuecheng.framework.domain.system.SysDictionary;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author HackerStar
 * @create 2020-08-11 15:54
 */
public interface SysDictionaryDao extends MongoRepository<SysDictionary,String>  {
    //根据字典分类查询字典信息
    SysDictionary findBydType(String dType);
}
