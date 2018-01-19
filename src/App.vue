<template>
  <div id="app">
        <router-view name="loginview"></router-view>
        <!-- 如果路由信息中的meta中的hidden等于true，就隐藏下面的视图 -->
        <div v-if="!this.$route.meta.hidden" class="div-h">
            <div class="div-h">
                <!-- 这是组件要插入的地方 -->
                <el-container class="div-h">
                    <el-aside style="width:200px;height:100%;background-color:#495060">
                        <side-bar></side-bar>
                    </el-aside>
                    <el-container>
                        <el-header style="padding:0;"><top-bar></top-bar></el-header>
                        <div class="tags" v-if="openPageTagList.length>0 && showTags">
                                <el-tag style="margin-right:10px;cursor:pointer;"
                                    v-for="tag in openPageTagList"
                                    :key="tag.name"
                                    closable
                                    @click.native="pageTagClick(tag)"
                                    @close="handleClose(tag)"
                                    :type="tag.type">
                                    {{tag.name}}
                                    </el-tag>
                                <el-button @click="closeTags" size="small">关闭</el-button>
                        </div>
                        <el-main>
                            <router-view></router-view>
                        </el-main>
                    </el-container>
                </el-container>
            </div>
        </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import util from './lib/utils.js';

export default {
    name: 'app',
    data() {
        return {
            showTags:true
        }
    },
    computed: {
        openPageTagList:function (){
            return this.$store.state.app.openPageTagList
        },
        isCollapse: function () {
            return this.$store.state.common.isCollapse
        },
        currentPath () {
            return this.$store.state.app.currentPath; // 当前面包屑数组
        },
    },
    components: {
        'top-bar': TopBar,
        'side-bar': SideBar,
    },
    methods: {
        closeTags(){
            this.showTags=false;
        },
        handleClose(tag) {
            util.delPageTagList(this,tag);
        },
        pageTagClick(tag){
            util.changePageTagList(this,tag);
            this.$router.push({path:tag.path});
        },
        init(){
            let pathArr = util.setCurrentPath(this, this.$route);
        }
    },
    watch: {
        '$route' (to) {
            util.addPageTagList(this,{
                name:to.name,
                path:to.path,
                type:'info'
            });
            util.setCurrentPath(this, to);
        }
    },
    mounted () {
        this.init();
    },
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
.div-h{
    height: 100%;
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
.el-menu-item i {
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
.tags{
    min-height: 50px;
    line-height: 50px;
    background-color: #fff;
    margin-top: 5px;
    padding: 0 20px;
    box-shadow: 1px 1px 1px #ddd;
}
</style>

