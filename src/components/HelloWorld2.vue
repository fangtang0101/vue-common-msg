<template>
  <div style="background-color: orange;padding: 30px">
    组件2接受事件的返回的数据{{acceptData}}
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
      input:'abc',
      acceptData:{}
    }
  },
  methods:{

  },
      mounted(){
        let self = this;
        console.log('mounted ...helloWorld.vue');
           commonMsg.registerEvents('user','efg',(dataBack)=>{
            self.acceptData = dataBack;
            console.log('i am back data is',dataBack);
        })
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
