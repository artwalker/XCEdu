<template>
  <div>
    <!--    查询表单-->
    <el-from :model="params">
      <el-select v-model="params.siteId" placeholder="请选择">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      页面别名：
      <el-input v-model="params.pageAliase" style="width: 100px"></el-input>
      <!--    按钮-->
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
      <!--      新增功能按钮-->
      <router-link :to="{path:'/cms/page/add',query:{
        page:this.params.page,
        siteId:this.params.siteId
      }}">
        <el-button type="primary" size="small">新增页面</el-button>
      </router-link>
    </el-from>
    <!--    Table表格-->
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column
        prop="pageName"
        label="页面名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="pageAliase"
        label="别名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pageType"
        label="页面类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="pageWebPath"
        label="访问路径"
        width="250">
      </el-table-column>
      <el-table-column
        prop="pagePhysicalPath"
        label="物理路径"
        width="250">
      </el-table-column>
      <el-table-column
        prop="pageCreateTime"
        label="创建时间"
        width="180">
      </el-table-column>

      <el-table-column label="操作" width="80">
        <template slot-scope="page">
          <el-button size="small" type="text" @click="edit(page.row.pageId)">编辑</el-button>
          <el-button size="small" type="text" @click="del(page.row.pageId)">删除</el-button>
          <el-button @click="preview(page.row.pageId)" type="text" size="small">页面预览</el-button>
          <el-button size="small" type="primary" plain @click="postPage(page.row.pageId)">发布</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    分页-->
    <el-pagination
      v-on:current-change="changePage"
      layout="prev, pager, next"
      :total="total"
      :current-page="this.params.page"
      :page-size="this.params.size"
      style="float:right">
    </el-pagination>
  </div>
</template>
<script>
  // 导入cms.js
  import * as cmsApi from '../api/cms'

  export default {
    data() {
      return {
        siteList: [], //站点列表
        list: [],
        total: 50,
        params: {
          siteId: '',// 用于填写默认页面列表的siteId
          pageAliase: '',
          page: 1, // 页码
          size: 10 //每页显示个数
        }
      }
    },
    methods: {
      postPage(id) {
        this.$confirm('确认发布该页面吗？', '提示', {}).then(() => {
          cmsApi.page_postPage(id).then((res) => {
            if (res.success) {
              console.log('发布页面id=' + id);
              this.$message.success('发布成功，请稍后查看结果');
            } else {
              this.$message.error('发布失败');
            }
          })
        }).catch(() => {
        })
      },
      //分页查询，接收page页码
      changePage(page) {
        this.params.page = page;
        this.query();
      },
      //查询
      query() {
        cmsApi.page_list(this.params.page, this.params.size, this.params).then((res) => {
          console.log(res)
          this.total = res.queryResult.total
          this.list = res.queryResult.list
        })
      },
      edit(pageId) {
        this.$router.push({
          path: '/cms/page/edit/' + pageId, query: {
            page: this.params.page,
            siteId: this.params.siteId
          }
        })
      },
      del: function (pageId) {
        this.$confirm('您确认删除吗?', '提示', {}).then(() => {

          //调用服务端接口
          cmsApi.page_del(pageId).then(res => {

            if (res.success) {
              this.$message.success("删除成功")
              //刷新页面
              this.query()
            } else {
              this.$message.error("删除失败")
            }
          })
        })
      },
      preview(pageId) {
        window.open("http://www.xuecheng.com/cms/preview/" + pageId);
      }
    },
    mounted() {
      // 默认查询页面
      this.query()
      //初始化站点列表
      this.siteList = [
        {
          siteId: '5a751fab6abb5044e0d19ea1',
          siteName: '门户主站'
        },
        {
          siteId: '102',
          siteName: '测试站'
        }
      ]
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
