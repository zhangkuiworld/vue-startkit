<template>
    <div class="world">
        <input type="text" v-model="name"><br>
        <p class="desc">This is World Page……</p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                name:"zlatan"
            }
        }
    }
</script>
<style lang="less">
    .world{
        text-align:center;
    & .desc{
          color:#2F8A4E;
      }
    & input{
          display: inline-block;
          height: 40px;
          width:300px;
          border:none;
          border-radius: 5px;
          outline:none;
          text-indent: 20px;
          background: rgba(0,0,0,0.5);
          color:#FFF;
      }
    }
</style>