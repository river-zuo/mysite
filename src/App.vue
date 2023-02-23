<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">json格式化</el-menu-item>
      <el-menu-item index="1">时间戳转换</el-menu-item>
      <el-menu-item index="2">About</el-menu-item>
    </el-menu>
    <!-- <div id="nav">
      <router-link to="/">json格式化</router-link> |
      <router-link to="/home">时间戳转换</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
  <!-- <div id="app">
    <h3>cccc</h3>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        menuList: [
          '/',
          '/home',
          '/about'
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(`key->[${key}], keyPath->[${keyPath}]`)
        let menu = this.menuList[key];
        this.$router.push(menu)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* background-color: rgb(208, 229, 229); */
}

.el-menu{
  padding-bottom: 0.5em;
}

</style>