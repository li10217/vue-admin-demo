<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
    <div>
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#495060"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-row>
          <el-col :span="6" style="text-align:center;">
            <img src="../assets/img/cat.png" height="56px" >
          </el-col>
          <el-col :span="12">
            <el-menu-item index="1">控制台</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的图库</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">回收站</a></el-menu-item>
            <el-menu-item index="3">用户管理</a></el-menu-item>
          </el-col>
          <el-col :span="6" style="">
            <el-col :span="12">
              <el-menu-item index="4">
                  <el-dropdown @command="handleClick">
                    <span class="el-dropdown-link" style="color:#ffffff;">
                      <img src="../assets/img/person.jpg" height="44px" style="border-radius:22px;margin:5px 5px;" >
                      {{userName}}
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">个人中心</el-dropdown-item>
                      <el-dropdown-item command="b">修改资料</el-dropdown-item>
                      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>  
                </el-menu-item>
            </el-col>
          </el-col>
        </el-row>
      </el-menu>
    </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  name: "topbar",
  data() {
    return {
      userName: localStorage.userName || "",
      activeIndex1:'1'
    };
  },
  computed: {
    isCollapse: function() {
      return this.$store.state.common.isCollapse;
    }
  },
  methods: {
    toggleSiderBar() {
      this.$store.commit("toggleSiderBar");
    },
    logout() {
      Cookies.set("isLogin", "0");
      localStorage.clear();
      this.$router.push("login");
    },
    handleSelect(index,indexpath){
      debugger
    },
    handleClick(command) {
        if(command=="logout"){
          this.logout();
        }
    }
  },
  watch: {
    $route(to, from) {
      this.pathName = this.$route.path.substring(1);
      this.nowPath = this.$route.path;
    }
  }
};
</script>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
<style scoped lang="less">
#topbar-wrap {
  overflow: hidden;
  border-bottom: 1px solid #e7eaec;
  background: #324157;
  color: #fff;
  padding: 0 15px;
  z-index: 4;
  box-sizing: border-box;
  transition: all 0.3s;
  .logo {
    color: #fff;
    font-weight: bold;
    line-height: 60px;
    margin: 0;
    letter-spacing: 1px;
  }
  .freeBtn {
    margin-top: 12px;
    text-align: right;
  }
  .name {
    font-weight: 600;
  }
  .el-icon-setting {
    transition: 1s;
    &:hover {
      transform: rotate(180deg);
      cursor: pointer;
    }
  }
  .fa {
    font-size: 24px;
    transition: all .3s;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    line-height: 60px;
  }
  a.logout {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #20a0ff;
    }
  }
  i {
    font-size: 20px;
    line-height: 60px;
  }
  .logout {
    color: #bfcbd9;
    &:hover {
      color: #fff;
    }
  }
}
.fa.nav-rotate {
  transform: rotate(90deg)
}
.el-submenu .el-menu-item{
  min-width: 100px;
}
</style>
