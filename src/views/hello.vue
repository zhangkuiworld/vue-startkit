<template>
    <strong>
        {{vueMsg}}<br>
        <span>fuck you shit!</span><br>
        <input type="text" v-model="name"><br>
        <p>my name is:{{name}}</p>
    </strong>
</template>
<script>
    module.exports =  {
        data:function() {
            return {
                vueMsg:'Vue hello world',
                name:'zhangkui'
            }
        }
    }
</script>
<style lang="less">
    strong{
        & span{
            color:blue;
          }
        color:red;
    }
</style>