<template>
  <div class="new-song">
    <h3>最新音乐</h3>
    <div class="recommend-list">
      <div
        v-for="song in songs"
        :key="song.id"
        class="recommend-item"
        @click="playSong(song.id)"
      >
        <img :src="song.picUrl" class="pic">
        <h4 class="title">{{ song.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { newSong } from '../../api/home.js';
import PlaySong from '../../components/common/PlaySong.js';

export default {
  name: 'NewSong',
  setup() {
    let songs = ref([]);
    const { playSong } = PlaySong();

    onMounted(async () => {
      try {
        const result = await newSong();
        songs.value = result.result;
      } catch (e) {
        console.log(e);
      }
    });

    return {
      songs,
      playSong
    }
  }
}
</script>

<style lang="less">
.new-song {
  .recommend-item {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
