<template>
    <div id="indexOuter">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link tag="li" :to="{path:'/bar'}" >Bar 界面</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" >消息中心</el-menu-item>
        <el-menu-item index="4">
          <router-link tag="li" :to="{path:'/aaa'}">Aaa 界面</router-link>
        </el-menu-item>
      </el-menu>

      <!-- echarts使用 -->
      <!-- <div id="myChart" :style="{width: '100%', height: '400px'}"></div> -->

      <!-- 子路由 -->
      <router-view></router-view>
    </div>
</template>>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')


  export default {
    data() {
      return {
        activeIndex: '1',
      }
    },
    mounted() {

      let arr = [1,2,3,55,32,7,432,43]
      let len=arr.length,j;
      let changeval;
      console.log(len)
      while(len > 0) {
        for(j=0;j<len-1;j++){
          if(arr[j] > arr[j+1]){
            changeval = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = changeval;
          }
        }
        len--;
      }
      console.log(arr)

      // 基于准备好的dom，初始化echarts实例
      // let myChart = echarts.init(document.getElementById('myChart'))

      
      // // 绘制图表
      // myChart.setOption({
      //   legend: {},
      //   tooltip: {},
      //   dataset: {
      //       source: [
      //           ['product', '2015', '2016', '2017'],
      //           ['Matcha Latte', 43.3, 85.8, 93.7],
      //           ['Milk Tea', 83.1, 73.4, 55.1],
      //           ['Cheese Cocoa', 86.4, 65.2, 82.5],
      //           ['Walnut Brownie', 72.4, 53.9, 39.1]
      //       ]
      //   },
      //   xAxis: {type: 'category'},
      //   yAxis: {},
      //   // Declare several bar series, each will be mapped
      //   // to a column of dataset.source by default.
      //   series: [
      //       {type: 'bar'},
      //       {type: 'bar'},
      //       {type: 'bar'}
      //   ]
      // });

      
      
    },
    methods: {
      refresh() {
        this.$router.go(0)
      }
    }
  }
</script>

<style lang="less" scoped>
  #indexOuter{width: 100%;height: 700px;border-bottom: 1px solid red;}


</style>