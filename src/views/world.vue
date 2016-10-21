<template>
   <center>
       <h1>I am world page! {{msg}}</h1>
       <h2>
           <p>less is awesome!</p>
       </h2>
   </center>
</template>
<script>
    module.exports =  {
        data:function() {
            return {
                msg:'Hello world from world page.'
            }
        }
    }
</script>
<style lang="less">
    h1{
        color: pink;
    }
    h2{
        & p{
            color:blue;
          }
    }
</style>