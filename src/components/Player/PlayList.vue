<template>
  <div>
    <div v-show="show" id="mask" @click="closeList"></div>
    <transition name="slide-right">
      <div v-show="show" class="play-list">
        <ul v-if="playList.length > 0" class="song-list">
          <li
            v-for="(song, index) in playList"
            :key="song.title"
            @click="playSong(index)"
            class="song-item"
          >
            <div class="song-item-main">
              <span class="title">{{ song.title }}</span>
              <span class="author">{{ song.author }}</span>
            </div>
            <button class="iconfont icon-remove" @click.stop="removeSong(index)"></button>
          </li>
        </ul>

        <div v-else class="none">暂无歌曲</div>
      </div>
    </transition>
  </div>
</template>

<script>
import { toRefs, computed, watch, toRef } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'PlayList',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const store = useStore();
    const { show } = toRefs(props);
    const playList = computed(() => store.state.player.list);
    const { emit } = context;

    const playSong = (index) => {
      store.dispatch('player/playSong', index);
    };

    const removeSong = (index) => {
      store.dispatch('player/removeSong', index);
    }

    const closeList = () => {
      emit('closeList', false);
    }

    watch(
      show,
      newValue => {
        document.body.style.overflow = newValue ? 'hidden' : 'visible';
      }
    )

    return {
      playList,
      playSong,
      removeSong,
      closeList
    }
  }
}
</script>

<style lang="less">
#mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 3;
  background: rgba(0, 0, 0, .5);
}
.play-list {
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 240px;
  height: 100%;
  box-shadow: -1px 0px 8px 0px rgba(0, 0, 0, .3);
  z-index: 3;
  background: #fff;
  color: #000;
  .song-list {
    padding: 10px;
  }
  .song-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    padding: 15px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background .3s ease-in-out;
    &:hover {
      background: #eee;
    }
    &-main {
      overflow: hidden;
    }
    .pic {
      width: 30px;
      height: 30px;
      margin: 0 15px 0 0;
      border-radius: 50%;
    }
    .title {
      overflow: hidden;
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .author {
      margin: 0 0 0 5px;
      font-size: 12px;
      color: #ccc;
    }
  }
  .none {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}
.slide-right {
  &-enter-active,
  &-leave-active {
    transition: transform .3s ease-in-out;
  }
  &-enter-from,
  &-leave-to {
    transform: translateX(100%);
  }
}
</style>
