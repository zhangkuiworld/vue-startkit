<template>
    <div class="img_content">
        <input type="text" v-model="name"><br>
        <p>my name is:{{name}}</p>
    </div>
</template>
<script>
    module.exports =  {
        data:function() {
            return {
                name:'Zhang Kui'
            }
        }
    }
</script>
<style lang="less">

</style>