<template>
    <strong>
        <input type="text" v-model="name"><br>
        <p>my name is:{{name}}</p>
    </strong>
</template>
<script>
    module.exports =  {
        data:function() {
            return {
                name:'Zlatan'
            }
        }
    }
</script>
<style lang="less">
    strong{
        color:red;
    }
</style>