package com.xuecheng.manage_order.test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * @author HackerStar
 * @create 2020-09-12 15:38
 */
@Component
public class ChooseCourseTask {
    private static final Logger LOGGER = LoggerFactory.getLogger(ChooseCourseTask.class);

    @Scheduled(fixedRate = 3000) //上次执行开始时间后5秒执行
    public void task2() {
        LOGGER.info("===============测试定时任务2开始===============");
        try {
            Thread.sleep(3000);
        } catch (
                InterruptedException e) {

            e.printStackTrace();
        }
        LOGGER.info("===============测试定时任务2结束===============");
    }

    //@Scheduled(initialDelay=3000, fixedRate=5000) //第一次延迟3秒，以后每隔5秒执行一次
    //@Scheduled(fixedDelay = 5000) //上次执行完毕后5秒执行
    //@Scheduled(fixedRate = 5000) //上次执行开始时间后5秒执行
    @Scheduled(cron = "0/3 * * * * *")//每隔3秒执行一次
    public void task1() {
        LOGGER.info("===============测试定时任务1开始===============");
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        LOGGER.info("===============测试定时任务1结束===============");
    }
}
