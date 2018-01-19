<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
    <el-row class="tac">
      <el-col :span="24">
        <div style="text-align:center;padding:10px 0;">
                <img src="../assets/img/cat.png" height="60px" class="gif pulse3"  @click="startDance">
        </div>
        <el-menu
          style="border:0;"
          default-active="/"
          :router="isRouter"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#495060"
          text-color="rgba(255,255,255,.7)"
          :unique-opened="true"
          active-text-color="#ffd04b">
          <template v-for="item in mnueList">
            <el-submenu v-if="item.children.length !== 0" :index="item.path" :key="item.path">
              <template slot="title">
                <i :class="item.meta.icon" width="30px"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item :index="child.path" :key="child.path" v-for="child in item.children">
                {{child.title}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.path" :key="item.path">
              <i :class="item.meta.icon" width="30px"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
</template>
<script>
  import {routers} from '@/router'
  export default {
    name: "SideBar",
    data (){
      return {
        mnueList:[],
        isRouter: true,
      }
    },
    created (){
      this.init();
    },
    methods: {
      init(){
        this.mnueList = routers.filter(item=>{
          if(!item.meta.hasOwnProperty('showInMnueList')){
              return item;
          }
        });
      },
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      startDance(){
        
      }
    }
  }
</script>