<template>
    <div id="app">
        <img src="./assets/logo.png">
        
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
              <HelloWorld msg="Welcome to Your Vue.js App" />
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    data() {
        return {
            activeName: 'second'
        }
    },
    components: {
        HelloWorld
    },
    methods: {
        handleClick() {
            // console.log(tab, event);
        }
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