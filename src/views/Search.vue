<template>
  <div class="search">
    <ul class="result-list">
      <li
        v-for="song in songs"
        :key="song.id"
        @click="addSong(song.id)"
        class="result-item"
      >
        <h4 class="title">{{ song.name }}</h4>
        <span v-for="artist in song.artists" :key="artist.id" class="author">{{ artist.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Request from '../utils/request.js';
export default {
  name: 'Search',
  setup() {
    const route = useRoute();
    const store = useStore();
    let songs = ref([]);
    
    watch(
      () => route.query,
      async newQuery => {
        if (Object.keys(newQuery).length === 0) {
          return;
        }
        const result = await Request.get('/search', {
          params: {
            ...newQuery
          }
        });
        songs.value = result.result.songs;
      }
    );

    onMounted(async () => {
      const { query } = route;
      const result =  await Request.get('/search', {
        params: {
          ...query
        }
      });
      songs.value = result.result.songs;
    });

    const addSong = (id) => {
      store.dispatch('player/addSong', id);
    };

    return {
      songs,
      addSong
    }
  }
}
</script>

<style lang="less">
/* mixins */
.nowrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.search {
  .result-item {
    display: flex;
    align-items: center;
    margin: 10px auto;
    padding: 10px;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background .3s ease-in-out;
    &:hover {
      background: #eee;
    }
    .title {
      .nowrap;
      font-size: 18px;
    }
    .author {
      margin: 0px 0px 0px 5px;
      font-size: 12px;
      color: #ccc;
      .nowrap;
    }
  }
}
</style>
