<template>
<div>
  <div id="nav">
    <Navbar></Navbar>
    <Banner></Banner>
    <Content></Content>
    <Footer></Footer>
  </div>
  <div>
    <router-view/>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import Content from '@/components/Content.vue'
export default {
  components: {
    Navbar,
    Footer,
    Banner,
    Content
  }
}
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
