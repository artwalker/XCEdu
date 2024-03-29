package com.xuecheng.auth.freemarker.controller;

import com.xuecheng.auth.freemarker.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.util.*;

/**
 * @author HackerStar
 * @create 2020-08-03 20:20
 */
@RequestMapping("/freemarker")
@Controller
public class FreemarkerController {

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        // Do any additional configuration here
        return builder.build();
    }

    @Autowired
    private RestTemplate restTemplate;

    //课程详情页面测试
    @RequestMapping("/course")
    public String course(Map<String, Object> map) {
        ResponseEntity<Map> forEntity =
                restTemplate.getForEntity("http://localhost:31200/course/courseview/4028e581617f945f01617f9dabc40000", Map.class);
        Map body = forEntity.getBody();
        map.putAll(body);
        return "course";
    }

    @RequestMapping("/test1")
    public String freemarker(Map<String, Object> map) {
        //向数据模型放数据
        map.put("name", "JavaEE");
        Student stu1 = new Student();
        stu1.setName("小明");
        stu1.setAge(18);
        stu1.setMoney(1000.86f);
        stu1.setBirthday(new Date());

        Student stu2 = new Student();
        stu2.setName("小红");
        stu2.setMoney(200.1f);
        stu2.setAge(19);
        stu1.setBestFriend(stu2);

        List<Student> friends = new ArrayList<>();

        friends.add(stu1);
        stu2.setFriends(friends);
        stu2.setBestFriend(stu1);

        List<Student> stus = new ArrayList<>();
        stus.add(stu1);
        stus.add(stu2);

        //向数据模型放数据
        map.put("stus", stus);

        //准备map数据
        HashMap<String, Student> stuMap = new HashMap<>();
        stuMap.put("stu1", stu1);
        stuMap.put("stu2", stu2);
        //向数据模型放数据
        map.put("stu1", stu1);
        //向数据模型放数据
        map.put("stuMap", stuMap);

        //返回模版文件名称
        return "test1";
    }

    @RequestMapping("/banner")
    public String index_banner(Map<String, Object> map) {
        String dataUrl = "http://localhost:31001/cms/config/getmodel/5a791725dd573c3574ee333f";
        ResponseEntity<Map> forEntity = restTemplate.getForEntity(dataUrl, Map.class);
        Map body = forEntity.getBody();
        map.putAll(body);
        return "index_banner";
    }
}
