<template>
  <div class="footer">
    <Player />
  </div>
</template>

<script>
import Player from '../../components/Player/index.vue';
export default {
  name: "Footer",
  components: {
    Player
  }
}
</script>

<style lang="less">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  background: rgba(3, 169, 244, .95);
}
</style>
