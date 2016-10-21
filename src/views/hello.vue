<template>
    <strong>
        {{vueMsg}}<br>
        <input type="text" v-model="name"><br>
        <p>my name is:{{name}}</p>
    </strong>
</template>
<script>
    module.exports =  {
        data:function() {
            return {
                vueMsg:'Hello, this is hello page',
                name:'zhang kui'
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