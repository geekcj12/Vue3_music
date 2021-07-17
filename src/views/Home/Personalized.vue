<template>
  <div class="personalized">
    <h3>推荐歌单</h3>
    <div class="recommend-list">
      <div
        v-for="item in personalizedList"
        :key="item.id"
        class="recommend-item"
      >
        <router-link :to="`/playlist/detail/${item.id}`">
          <img :src="item.picUrl" class="pic">
          <h4 class="title">{{ item.name }}</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { personalized } from '../../api/home.js';
export default {
  name: 'Personalized',
  setup() {
    let personalizedList = ref([]);

    onMounted(async () => {
      const result = await personalized();
      personalizedList.value = result.result;
    });

    return {
      personalizedList
    }
  }
}
</script>
