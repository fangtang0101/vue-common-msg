<template>
  <div class="hello" style="background-color: #999;padding: 30px">
    <el-button @click='sendEvent'>点击发出事件 给App.vue</el-button>
    <el-button @click='sendEvent2'>点击发出事件 给helloWorld2.vue</el-button>
  </div>
</template>

<script>
import {commonMsg} from '../commonMsg';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return{
      input:'abc'
    }
  },
  methods:{
     sendEvent(){
      commonMsg.sendEvents('abc',{name:'xiao ming',age:80})
    },
    sendEvent2(){
      commonMsg.sendEvents('user',{name:'user name',age:59})
    }
  },
     mounted(){
       // setTimeout(()=>{
       // console.log('mounted ...HelloWorld.vue');
       //     let data ={name:'liu de hua',age:38};
       //    commonMsg.sendEvents('abc',data)
       // },2000)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
