<template>
　 <ul class="side list-unstyled">
　　 <el-button @click="addItem({content:Math.random()})"> 增加</el-button>
　　 <el-button @click="deleteItem()"> 删除</el-button>
　 </ul>
</template>
<script>
export default {
  data(){
      return {

      }
  },
  methods: {
      addItem(num){
          this.$store.commit( 'ADD_ITEM',num);
      },
      deleteItem(){
          this.$store.commit( 'DELETE_ITEM');
      }
  }
}
</script>
