<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
    <div>
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-row type="flex" class="row-bg">
          <el-col :span="18">
            <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
          </el-col>
          <el-col :span="6">
            <el-row type="flex" class="row-bg" justify="end">
                <el-menu-item index="9">
                    <el-dropdown @command="handleClick">
                      <span class="el-dropdown-link" style="color:#409EFF;">
                        {{userName}}
                        <i class="el-icon-caret-bottom" style="color:#409EFF;margin:0;height:24px;"></i>
                        <img src="../assets/img/person.jpg" height="44px" style="border-radius:22px;margin:5px 5px;" >
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">个人中心</el-dropdown-item>
                        <el-dropdown-item command="b">修改资料</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>  
                  </el-menu-item>
          </el-row>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>
<script>
import Cookies from "js-cookie";
import breadcrumbNav from './breadcrumbNav.vue';
export default {
  name: "topbar",
  data() {
    return {
      userName: localStorage.userName || "",
      activeIndex1:'1'
    };
  },
  components: {
    breadcrumbNav,
  },
  computed: {
    isCollapse: function() {
      return this.$store.state.common.isCollapse;
    },
    currentPath: function() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    }
  },
  methods: {
    toggleSiderBar() {
      this.$store.commit("toggleSiderBar");
    },
    logout() {
      Cookies.set("isLogin", "0");
      localStorage.clear();
      this.$router.push({path:'/login'});
    },
    handleSelect(index,indexpath){
      
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
