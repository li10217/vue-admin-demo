<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
html,body {
    height: 100%;
    width: 100%;
}
// 注意以下是全局样式
body {
    margin: 0;
    padding: 0;
    background: #f3f3f4;
    #app {
        height: 100%;
        .con-wrap {
            padding-left: 160px;
            transition: all 0.3s;
            h3 {
                margin-top: 0;
                color: #324157;
            }
            .page-component-wrap {
                padding: 15px;
            }
        }
        .con-wrap.conCollapse {
            padding-left: 64px;
            transition: all 0.3s;
        }
    }
}

// 左侧导航图表垂直方向对齐
// 宽度还得自己设定，坑死
.el-menu {
    width: 100%;
}
.el-menu-item [class^=el-icon-] {
    vertical-align: middle;
    color: #ddd;
}
.el-submenu [class^=el-icon-] {
    color: #ddd;
}
.el-submenu__title i {
    vertical-align: middle;
    color: #ddd;
}

// 自定义必填项的左上角红色星号
.required-self label.el-form-item__label:before {
    content: '*';
    color: #ff4949;
    margin-right: 4px;
}
</style>

