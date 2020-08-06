package com.xuecheng.test.rabbitmq;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

/**
 * @author HackerStar
 * @create 2020-08-06 14:10
 */
class Producer04_topics {
    //队列名称
    private static final String QUEUE_INFORM_EMAIL = "queue_inform_email";
    private static final String QUEUE_INFORM_SMS = "queue_inform_sms";
    //交换机名称
    private static final String EXCHANGE_TOPICS_INFORM = "exchange_topics_inform";

    public static void main(String[] args) {
        try {
            ConnectionFactory factory = new ConnectionFactory();
            factory.setHost("localhost");
            factory.setPort(5672);
            factory.setUsername("guest");
            factory.setPassword("guest");
            factory.setVirtualHost("/");//rabbitmq默认虚拟机名称为“/”，虚拟机相当于一个独立的mq服务器
            //创建与RabbitMQ服务的TCP连接
            Connection connection = factory.newConnection();
            //创建与Exchange的通道，每个连接可以创建多个通道，每个通道代表一个会话任务
            Channel channel = connection.createChannel();
            /**
             * 1、交换机名称
             * 2、交换机类型，fanout、topic、direct、headers
             */
            channel.exchangeDeclare(EXCHANGE_TOPICS_INFORM, BuiltinExchangeType.TOPIC);

            /**
             * 声明队列，如果Rabbit中没有此队列将自动创建
             * param1:队列名称
             * param2:是否持久化
             * param3:队列是否独占此连接
             * param4:队列不再使用时是否自动删除此队列
             * param5:队列参数
             */
            channel.queueDeclare(QUEUE_INFORM_EMAIL, true, false, false, null);
            channel.queueDeclare(QUEUE_INFORM_SMS, true, false, false, null);

            //发送消息
            for (int i=0;i<10;i++){
                String message = "inform to user"+i;
                /**
                 * 1、交换机名称，不指令使用默认交换机名称 Default Exchange
                 * 2、routingKey（路由key），根据key名称将消息转发到具体的队列，这里填写队列名称表示消息将发到此队列
                 * 3、消息属性
                 * 4、消息内容
                 */
                //Email通知
                channel.basicPublish(EXCHANGE_TOPICS_INFORM, "inform.sms", null, message.getBytes());
                System.out.println("Send Message is:'" + message + "'");
            }

            //发送消息
            for (int i=0;i<10;i++){
                String message = "inform to user"+i;
                /**
                 * 1、交换机名称，不指令使用默认交换机名称 Default Exchange
                 * 2、routingKey（路由key），根据key名称将消息转发到具体的队列，这里填写队列名称表示消息将发到此队列
                 * 3、消息属性
                 * 4、消息内容
                 */
                //Email通知
                channel.basicPublish(EXCHANGE_TOPICS_INFORM, "inform.email", null, message.getBytes());
                System.out.println("Send Message is:'" + message + "'");
            }

            //发送消息
            for (int i=0;i<10;i++){
                String message = "inform to user"+i;
                /**
                 * 1、交换机名称，不指令使用默认交换机名称 Default Exchange
                 * 2、routingKey（路由key），根据key名称将消息转发到具体的队列，这里填写队列名称表示消息将发到此队列
                 * 3、消息属性
                 * 4、消息内容
                 */
                //Email通知
                channel.basicPublish(EXCHANGE_TOPICS_INFORM, "inform.email.sms", null, message.getBytes());
                System.out.println("Send Message is:'" + message + "'");
            }
        } catch (Exception e) {

        } finally {

        }
    }
}
