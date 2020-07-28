<template>
  <div id="app">
    <Header />

    <router-view/>

    <Footer />
  </div>
</template>
<script>
  import Header from './views/Header';
  import Footer from "./views/Footer";
  export default {
    name: "App",
    components: {
      Footer,
      Header
    }
  }
</script>
<style lang="scss">
  @import './assets/extends';
</style>
