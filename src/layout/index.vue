<template>
  <div class="layout">
    <Header />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header/index.vue';
import Footer from './Footer/index.vue';
export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "../assets/css/index.less";
.layout {
  height: 100%;
}
.main {
  .container;
  margin: 0 auto 90px;
}
</style>
