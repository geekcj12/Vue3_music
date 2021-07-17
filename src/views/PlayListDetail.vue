<template>
  <div class="detail">
    <div class="detail-header">
      <img :src="playlist.coverImgUrl" :alt="playlist.name" class="cover">
      <div class="detail-info">
        <h2>{{ playlist.name }}</h2>
        <p>{{ playlist.description }}</p>
        <div class="detail-data">
          <span>播放数</span>
          <span>{{ playlist.playCount }}</span>
        </div>
      </div>
    </div>

    <div class="detail-main">
      <ul class="list">
        <li
          v-for="track in playlist.tracks"
          :key="track.id"
          class="item"
          @click="playSong(track.id)"
        >
          <h3 class="title">{{ track.name }}</h3>
          <span
            v-for="singer in track.ar"
            :key="singer.id"
            class="singer"
          >
            {{ singer.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getDetail } from '../api/playlist.js';
import PlaySong from '../components/common/PlaySong.js';

export default {
  name: 'PlayListDetail',
  setup() {
    let playlist = ref({});
    const route = useRoute();
    const id = route.params.id;
    const { playSong } = PlaySong();

    onMounted(async () => {
      try {
        const result = await getDetail(id);
        playlist.value = result.playlist;
      } catch (e) {
        console.log(e);
      }
    });

    return {
      playlist,
      playSong
    }
  }
}
</script>

<style lang="less">
.detail {
  padding: 15px;
}
.detail-header {
  display: flex;
  .cover {
    width: 172px;
    height: 172px;
    object-fit: cover;
    border-radius: 8px;
  }
  .detail-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 0 15px;
  }
  .detail-data {
    span {
      &:first-child {
        margin: 0 5px 0 auto;
        color: #a7a2a6;
      }
      &:last-child {
        font-weight: 600;
      }
    }
  }
}
.detail-main {
  .list {
    .item {
      margin: 10px auto;
      padding: 10px 5px;
      border-radius: 6px;
      list-style: none;
      cursor: pointer;
      transition: all .3s ease-in-out;
      &:hover {
        background: #eee;
      }
    }
    .title {
      display: inline-block;
    }
    .singer {
      margin: 0 auto 0 5px;
      color: #a7a2a6;
    }
  }
}
</style>
