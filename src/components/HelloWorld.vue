<template>
  <div>
    <h1>{{msg}}</h1>
    <el-button type="primary" @click="SignOut">退出</el-button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    SignOut(){
      Cookies.remove('isLogin');
      this.$router.push("/login");
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>