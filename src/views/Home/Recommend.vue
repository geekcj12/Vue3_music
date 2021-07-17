<template>
  <div class="recommend">
    <h3>推荐节目</h3>
    <div class="recommend-list">
      <div
        v-for="item in recommendList"
        :key="item.id"
        class="recommend-item"
      >
        <router-link :to="`/program/detail/${item.id}`">
          <img :src="item.coverUrl" class="pic">
          <h4 class="title">{{ item.name }}</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { recommend } from '../../api/home.js';
export default {
  name: 'Recommend',
  setup() {
    let recommendList = ref([]);

    const getRecommend = async () => {
      try {
        const result = await recommend();
        recommendList.value = result.programs;
      } catch (error) {
        console.log(error);
      }
    };
    
    onMounted(() => {
      getRecommend();
    });

    return {
      recommendList
    };
  }
}
</script>
