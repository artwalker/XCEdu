package com.xuecheng.test.rabbitmq;

import com.rabbitmq.client.*;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.concurrent.TimeoutException;

/**
 * @author HackerStar
 * @create 2020-08-06 14:29
 */
public class Consumer04_topics_email {
    //队列名称
    private static final String QUEUE_INFORM_EMAIL = "queue_inform_email";
    //交换机
    private static final String EXCHANGE_TOPICS_INFORM="exchange_topics_inform";

    public static void main(String[] args) throws IOException, TimeoutException {
        //创建一个与MQ的连接
        ConnectionFactory factory = new ConnectionFactory();
        //设置MabbitMQ所在服务器的ip和端口
        factory.setHost("127.0.0.1");
        factory.setPort(5672);
        factory.setUsername("guest");
        factory.setPassword("guest");
        factory.setVirtualHost("/");//rabbitmq默认虚拟机名称为“/”，虚拟机相当于一个独立的mq服务器

        //创建一个连接
        Connection connection = factory.newConnection();
        //创建与交换机的通道，每个通道代表一个会话
        Channel channel = connection.createChannel();

        /**
         * 1、交换机名称
         * 2、交换机类型，fanout、topic、direct、headers
         */
        channel.exchangeDeclare(EXCHANGE_TOPICS_INFORM, BuiltinExchangeType.TOPIC);
        //声明队列
        channel.queueDeclare(QUEUE_INFORM_EMAIL, true, false, false, null);

        channel.queueBind(QUEUE_INFORM_EMAIL,EXCHANGE_TOPICS_INFORM,"inform.#.email.#");
        //定义消费方法
        DefaultConsumer consumer = new DefaultConsumer(channel) {

            /**
             * 消费者接收消息调用此方法
             * @param consumerTag 消费者的标签，在channel.basicConsume()去指定
             * @param envelope 消息包的内容，可从中获取消息id，消息routingkey，交换机，消息和重传标志 (收到消息失败后是否需要重新发送)
             * @param properties
             * @param body
             */
            @Override public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws UnsupportedEncodingException {
                //交换机
                String exchange = envelope.getExchange();
                //路由key
                String routingKey = envelope.getRoutingKey();
                //消息id
                long deliveryTag = envelope.getDeliveryTag();
                //消息内容
                String msg = new String(body,"utf-8");
                System.out.println("receive message.." + msg);
            }
        };

        /**
         * 监听队列
         * String queue: 队列名称
         * boolean autoAck:是否自动回复，设置为true为表示消息接收到自动向mq回复接收到了，mq接收到回复会删除消息，设置为false则需要手动回复
         * Consumer callback:消费消息的方法，消费者接收到消息后调用此方法
         */
        channel.basicConsume(QUEUE_INFORM_EMAIL, true, consumer);
    }
}
