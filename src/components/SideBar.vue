<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
    <div id="sidebar-wrap" :class="{ collapsed: toggSiderBar }">
        <div style="text-align:center;padding:10px 0;">
            <img src="../assets/img/cat.png" height="60px" class="gif pulse3"  @click="startDance">
        </div>
        <el-menu background-color="#324157" text-color="#ddd" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="vertical" :collapse="toggSiderBar">
            <template v-for="item in menu">
                <el-submenu v-if="item.children.length !== 0" :index="item.router" :key="item.router">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.router" :key="child.router">
                        <i :class="child.icon"></i>
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item v-else :index="item.router" :key="item.router">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
        
    </div>
</template>
<script>

export default {
  name: "sidebar",
  data() {
    return {
      isMusicOn: false,
      isUnique: true,
      isRouter: true,
      menu: localStorage.menu ? JSON.parse(localStorage.menu) : []
    };
  },
  computed: {
    toggSiderBar: function() {
      return this.$store.state.common.isCollapse;
    }
  },
  created() {
      
  },
  methods: {

    startDance() {
      if (this.isMusicOn) {
        this.isMusicOn = false;
      } else {
        this.isMusicOn = true;
      }
    }
  }
};
</script>
<style scoped lang="less">
#sidebar-wrap {
  width: 160px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #324157;
  z-index: 5;
  transition: all 0.3s;

  /* 图标动画 */
  .imgWrap {
    text-align: center;
    position: absolute;
    bottom: 30px;
    width: 100%;
    .gif {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .logo {
    color: #fff;
    text-align: center;
    margin: 18px 0;
  }
}

// 动态改变左侧导航包裹层宽度
#sidebar-wrap.collapsed {
  width: 64px;
  transition: all 0.3s;
}

// 美化左侧导航的留白
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 20px !important;
}
</style>
