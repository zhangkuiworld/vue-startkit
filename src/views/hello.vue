<template>
    <div class="hello">
        <input type="text" v-model="name"><br>
        <p class="desc">This is Hello Page……</p>
        <button @click="test_click">click me!</button>
    </div>
</template>
<script>
    module.exports =  {
        data:function() {
            return {
                name:'Zhang Kui'
            }
        },
        methods:{
            test_click:function(){
                //$("input").val("clicked");
                console.log($);
                this.name = "clicked";//双向数据绑定
                console.log(this.name);
            }
        }
    }
</script>
<style lang="less">
    .hello{
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