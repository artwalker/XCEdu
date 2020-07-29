<template>
  <div>
    <!--    按钮-->
    <el-row>
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
    </el-row>
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
        list: [],
        total: 50,
        params: {
          page: 1, // 页码
          size: 2 //每页显示个数
        }
      }
    },
    methods: {
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
      }
    },
    mounted() {
      // 默认查询页面
      this.query()
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
