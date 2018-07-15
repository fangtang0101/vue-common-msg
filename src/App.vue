<template>
    <div id="app">
        <img src="./assets/logo.png">
        App.vue中接受事件数据{{acceptData}}
        <HelloWorld msg="comp1" />
        <HelloWorld2 msg="comp2" />
    </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'

// import 'commonMsg';
import {commonMsg} from './commonMsg';

export default {
    name: 'app',
    data() {
        return {
            activeName: 'second',
            acceptData:{}
        }
    },
    components: {
        HelloWorld,
        HelloWorld2
    },
    methods: {
        handleClick() {
            // console.log(tab, event);
        }
    },
    mounted(){
        let self = this;
        console.log('mounted ...app.vue');
           commonMsg.registerEvents('abc','efg',(dataBack)=>{
            self.acceptData = dataBack;
            console.log('i am back data is',dataBack);
        })
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>