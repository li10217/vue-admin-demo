<template>
　 <div class="content">
　　 <div class="item" :key="item.index" v-for="item in items">
　　　 {{ item.content }}
　　 </div>
　 </div>
</template>
<script>
export default {
    data(){
        return {
            items:this.$store.state.admin.items
        }
    },
    methods: {
        showState(){
            console.log(this.items);
        }
    }
}
</script>
