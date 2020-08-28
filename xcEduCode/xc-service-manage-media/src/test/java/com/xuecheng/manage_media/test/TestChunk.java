package com.xuecheng.manage_media.test;

import org.junit.Test;

import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.*;

/**
 * @author HackerStar
 * @create 2020-08-28 11:20
 */
public class TestChunk {
    //测试文件分块方法
    @Test
    public void testChunk() throws IOException {
        File sourceFile = new File("/Users/XinxingWang/Development/Java/video/lucene.mp4");
        String chunkPath = "/Users/XinxingWang/Development/Java/video/chunk/";
        File chunkFolder = new File(chunkPath);
        if (!chunkFolder.exists()) {
            chunkFolder.mkdirs();
        }
        //分块大小 表示1M
        long chunkSize = 1024 * 1024 * 1; //1M=1024KB=1024*1024 B
        //分块数量
        double chunkNum = Math.ceil(sourceFile.length() * 1.0 / chunkSize);
        if (chunkNum <= 0) {
            chunkNum = 1;
        }
        //缓冲区大小
        byte[] b = new byte[1024 * 1024]; //M
        //使用RandomAccessFile访问文件
        RandomAccessFile raf_read = new RandomAccessFile(sourceFile, "r");
        //分块
        for (int i = 0; i < chunkNum; i++) {
            //创建分块文件
            File file = new File(chunkPath + i);
            boolean newFile = file.createNewFile();
            if (newFile) {
                //向分块文件中写数据
                RandomAccessFile raf_write = new RandomAccessFile(file, "rw");
                int len = -1;
                while ((len = raf_read.read(b)) != -1) {
                    raf_write.write(b, 0, len);
                    if (file.length() > chunkSize) {
                        break;
                    }
                }
                raf_write.close();
            }
        }
        raf_read.close();
    }

    //测试文件合并方法
    @Test
    public void testMerge() throws IOException {
        //块文件目录
        File file = new File("/Users/XinxingWang/Development/Java/video/chunk/");
        //合并文件
        File mergeFile = new File("/Users/XinxingWang/Development/Java/video/lucene1.mp4");
        if (mergeFile.exists()) {
            mergeFile.delete();
        }
        //向分块文件中写数据
        RandomAccessFile raf_write = new RandomAccessFile(mergeFile, "rw");
        //指针指向文件顶端
        raf_write.seek(0);
        //缓冲区
        byte[] b = new byte[1024 * 1024];
        //分块列表
        File[] fileArray = file.listFiles();
        // 转成集合，便于排序
        List<File> fileList = new ArrayList<File>(Arrays.asList(fileArray));
        // 从小到大排序
        Collections.sort(fileList, new Comparator<File>() {
            @Override
            public int compare(File o1, File o2) {
                if (Integer.parseInt(o1.getName()) < Integer.parseInt(o2.getName())) {
                    return -1;
                }
                return 1;
            }
        });
        //合并文件
        for (File chunkFile : fileList) {
            RandomAccessFile raf_read = new RandomAccessFile(chunkFile, "rw");
            int len = -1;
            while ((len = raf_read.read(b)) != -1) {
                raf_write.write(b, 0, len);
            }
            raf_read.close();
        }
        raf_write.close();
    }
}
