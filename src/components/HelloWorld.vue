<template>
  <div>
    <side></side>
　  <Content></Content>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import Side from "./Side"
import Content from "./Content"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components: {
    Side,
    Content
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