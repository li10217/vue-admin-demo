<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:60px;margin-left:20px;">
        <el-breadcrumb-item 
            :to="{ path: '/' }"  
            v-for="item in currentPath" 
            :key="item.title">
            {{itemTitle(item)}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'breadcrumbNav',
    props: {
        currentPath: Array
    },
    methods: {
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return this.$t(item.title.i18n);
            } else {
                return item.title;
            }
        }
    }
};
</script>

