<template>
  <div id="app">
    <a href="http://www.bloggeng.com/" target="_blank" id="logo">
      <img src="http://image.bloggeng.com/gitblog/toutiao.jpg" alt="">
    </a>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
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
  #logo img{
    margin: 20px auto;
  }
</style>
