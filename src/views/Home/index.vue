<template>
  <div class="home">
    <Personalized />
    <NewSong />
    <Recommend />
  </div>
</template>

<script>
import Personalized from './Personalized.vue';
import NewSong from './NewSong.vue';
import Recommend from './Recommend.vue';
// import Loading from '../../components/Loading/index.js';
export default {
  name: 'Home',
  components: {
    Personalized,
    NewSong,
    Recommend
  }
}
</script>

<style lang="less">
.home {
  padding: 10px;
  & > div {
    &:not(:first-child) {
      margin: 20px auto;
    }
  }
  .recommend-list {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 15px;
    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(6, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .recommend-item {
    cursor: pointer;
    a {
      color: #000;
    }
    .pic {
      width: 100%;
      border-radius: 6px;
    }
    .title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 14px;
    }
  }
}
</style>
