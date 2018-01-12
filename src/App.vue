<template>
  <div id="app">
        <router-view name="loginview"></router-view>
        <!-- 如果路由信息中的meta中的hidden等于true，就隐藏下面的视图 -->
        <div v-if="!this.$route.meta.hidden">
            <!-- 这是侧导航 -->
            <!-- <side-bar></side-bar> -->
            <div>
                <!-- 这是顶部导航 -->
                <top-bar></top-bar>
                <!-- 这是组件要插入的地方 -->
                
                <div style="width:70%;margin:0 15%;">
                    <el-container>
                    <el-header style="line-height:60px;">
                        <el-tag style="margin-right:10px;"
                        v-for="tag in tags"
                        :key="tag.name"
                        closable
                        @close="handleClose(tag)"
                        :type="tag.type">
                        {{tag.name}}
                        </el-tag>
                    </el-header>
                    <el-container>
                        <el-aside width="200px">Aside</el-aside>
                        <el-container>
                        <el-main>
                            <router-view class="page-component-wrap animated fadeIn"></router-view>
                        </el-main>
                        <el-footer>Footer</el-footer>
                        </el-container>
                    </el-container>
                    </el-container>
                </div>
                
            </div>
        </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'

export default {
    name: 'app',
    data() {
        return {
            tags: [
                { name: '标签一', type: '' },
                { name: '标签二', type: 'info' },
                { name: '标签三', type: 'info' },
                { name: '标签四', type: 'info' },
                { name: '标签五', type: 'info' }
            ]
        }
    },
    computed: {
        isCollapse: function () {
            return this.$store.state.common.isCollapse
        }
    },
    components: {
        'top-bar': TopBar,
        'side-bar': SideBar,
    },
    methods: {
        handleClose(tag) {
            this.tags.splice(this.tags.indexOf(tag), 1);
        }
    }
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

