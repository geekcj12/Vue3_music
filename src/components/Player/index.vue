<template>
  <div class="player">
    <ProgressBar
      :progress="progress"
      :loaded="loaded"
      :disabled="disabled"
      @changeTime="changeTime"
    />

    <span class="current-time">{{ handleTime(currentTime) }}</span>
    <span class="total-time">{{ handleTime(totalTime) }}</span>

    <div class="player-main">
      <div v-if="song" class="song-info">
        <img
          v-if="song.pic"
          :src="song.pic"
          ref="pic"
          class="pic"
          :class="{active: playing}"
        >
        <div v-else class="pic"></div>
        <h3 class="title">{{ song.title }}</h3>
      </div>

      <Lrc :lrcUrl="song.lrc" :currentTime="currentTime" class="lrc" />

      <div class="control">
        <Volume v-model="volume" />

        <button class="iconfont" :class="[playing ? 'icon-pause' : 'icon-play']" @click="toggle"></button>
        <button class="iconfont icon-next" @click="nextSong"></button>
        <button class="iconfont icon-more-line" @click="toggleList"></button>
      </div>
      
    </div>

    <PlayList :show="showList" @closeList="closeList" />
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
import PlayList from './PlayList.vue';
import Volume from './Volume.vue';
import Lrc from './Lrc.vue';
import { ref, onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Player',
  components: {
    ProgressBar,
    Volume,
    Lrc,
    PlayList
  },
  setup() {
    const store = useStore();
    const playing = ref(false);
    const progress = ref(0);
    const loaded = ref(0);
    const showList = ref(false);
    const volume = ref(0.5);
    const pic = ref(null);
    const currentTime = ref(0);
    const totalTime = ref(0);

    const song = computed(() => store.state.player.current);
    const disabled = computed(() => Object.keys(song.value).length === 0);

    let audio = null;

    const handleTime = (time) => {
      const minute = Math.floor(time / 60);
      const second = Math.floor(time) - minute * 60;
      return `${minute}:${second}`;
    };

    const initAudio = () => {
      audio = new Audio();

      audio.volume = volume.value;

      audio.addEventListener('canplay', () => {
        audio.play();
        totalTime.value = audio.duration;
        playing.value = true;
      });

      audio.addEventListener('timeupdate', () => {
        if (audio.buffered.length) {
          progress.value = Math.round((audio.currentTime / audio.duration) * 10000) / 100;
          loaded.value = Math.round((audio.buffered.end(0) / audio.duration) * 10000) / 100;
          currentTime.value = audio.currentTime
        }
      });

      audio.addEventListener('play', () => {
        playing.value = true;
      });

      audio.addEventListener('pause', () => {
        playing.value = false;
      });

      // 在音频或视频终止加载时触发，包括终止当前播放（未加载完）进行下一首播放时也会触发
      audio.addEventListener('abort', () => {
        console.log('abort');
      });

      audio.addEventListener('ended', () => {
        audio.pause();
        playing.value = false;
        store.dispatch('player/nextSong');
      });
    };

    onMounted(() => {
      initAudio();
    });

    watch(
      song,
      newSong => {
        audio.src = newSong.url;
      }
    );

    watch(
      volume,
      newVolume => {
        audio.volume = newVolume;
      }
    )

    const toggle = () => {
      if (disabled.value) {
        return;
      }
      
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    };

    const changeTime = (data) => {
      audio.currentTime = Math.ceil(audio.duration * (data / 100));
    };

    const nextSong = () => {
      store.dispatch('player/nextSong');
    };

    const toggleList = () => {
      showList.value = !showList.value;
    }

    const closeList = (data) => {
      showList.value = data;
    }

    return {
      playing,
      progress,
      loaded,
      song,
      showList,
      pic,
      volume,
      currentTime,
      totalTime,
      disabled,
      toggle,
      changeTime,
      nextSong,
      toggleList,
      closeList,
      handleTime
    };
  }
}
</script>

<style lang="less">
@keyframes round {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.player {
  position: relative;
  height: 100%;
  color: #fff;
  .current-time,
  .total-time {
    position: absolute;
  }
  .current-time {
    left: 10px;
  }
  .total-time {
    right: 10px;
  }
  &-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    line-height: 84px;
    text-align: center;
  }
  .song-info {
    display: inline-flex;
    align-items: center;
    max-width: 50%;
    margin: 0 28px 0 0;
    cursor: pointer;
    .title {
      overflow: hidden;
      display: inline-block;
      margin: 0 0 0 8px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 20px;
    }
  }
  .lrc {
    flex: 1;
  }
  .control {
    display: inline-block;
    .iconfont {
      font-size: 20px;
      cursor: pointer;
      color: #fff;
      @media screen and (max-width: 767px) {
        font-size: 17px;
      }
      &:not(:last-child) {
        margin: 0 14px 0 0;
      }
    }
  }
  .pic {
    flex-shrink: 0;
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    user-select: none;
    background: #cdcdcd;
    animation: round 5s infinite linear;
    animation-play-state: paused;
    &.active {
      animation-play-state: running;
    }
    @media screen and (max-width: 767px) {
      width: 32px;
      height: 32px;
    }
  }
}
.slide {
  &-enter-active,
  &-leave-active {
    transition: transform .5s ease-in-out;
  }
  &-enter-from,
  &-leave-to {
    transform: translateY(100%);
  }
}
</style>
