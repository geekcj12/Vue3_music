<template>
  <div class="header">
    <h2 class="site-title">
      <router-link to="/">冈另云音乐</router-link>
    </h2>
    <form class="search-form" @submit.prevent="toSearch">
      <input v-model="searchText" type="text" class="search-input" placeholder="你想搜什么？">
      <button type="submit">搜索</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: "Header",
  setup() {
    const router = useRouter();
    let searchText = ref('');

    const toSearch = async () => {
      if (searchText.value) {
        router.push({
          path: '/search',
          query: { keywords: searchText.value }
        });
      }
    };

    return {
      searchText,
      toSearch
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/index.less";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  background: #fff;
  color: #000;
  .container;
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
  .site-title {
    display: inline-block;
    line-height: 60px;
    a {
      color: #000;
    }
  }
  .search-form {
    display: inline-block;
    .search-input {
      padding: 10px;
      border: 0;
      border-radius: 6px;
      outline: 0;
      text-align: center;
      background: #eee;
    }
  }
}
</style>
