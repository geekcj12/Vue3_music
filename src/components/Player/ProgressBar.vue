<template>
  <div
    class="progress-bar"
    ref="progressBar"
  >
    <div class="played" :style="{width: `${progressWidth}%`}">
      <div class="thumb" ref="thumb"></div>
    </div>

    <div class="loaded" :style="{width: `${loadedWidth}%`}"></div>
  </div>
</template>

<script>
import { ref, toRefs, onMounted, watch } from 'vue';
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0
    },
    loaded: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const progressBar = ref(null);
    const thumb = ref(null);
    let { progress, loaded, disabled } = toRefs(props);
    let progressWidth = ref(progress.value);
    let loadedWidth = ref(loaded.value);
    // let time = ref(0);
    const { emit } = context;

    const isMobile = /mobile/i.test(window.navigator.userAgent);
    const nameMap = {
      dragStart: isMobile ? 'touchstart' : 'mousedown',
      dragMove: isMobile ? 'touchmove' : 'mousemove',
      dragEnd: isMobile ? 'touchend' : 'mouseup',
    };
    
    onMounted(() => {
      init();
    });

    const init = () => {
      let isClickThumb = false;

      watch([progress, loaded], (newValues) => {
        const [newProress, newLoaded] = newValues;
        if (!isClickThumb) {
          progressWidth.value = newProress;
        }

        loadedWidth.value = newLoaded;
      });

      progressBar.value.addEventListener('click', (e) => {
        if (!disabled.value) {
          progressWidth.value = Math.round((e.x / progressBar.value.offsetWidth) * 10000) / 100;
          emit('changeTime', progressWidth.value);
        }
      });

      thumb.value.addEventListener(nameMap.dragStart, () => {
        if (!disabled.value) {
          isClickThumb = true;
        }
        document.addEventListener(nameMap.dragMove, (e) => {
          e.preventDefault();
          if (isClickThumb) {
            const clientX = isMobile ? e.changedTouches[0].clientX : e.clientX;
            progressWidth.value = Math.round((clientX / progressBar.value.offsetWidth) * 10000) / 100;
          }
        });

        document.addEventListener(nameMap.dragEnd, () => {
          if (isClickThumb) {
            emit('changeTime', progressWidth.value)
          }
          isClickThumb = false;
        });
      });
    }

    return {
      progressBar,
      thumb,
      progressWidth,
      loadedWidth
    }
  }  
}
</script>

<style lang="less">
.progress-bar {
  position: relative;
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: #cdcdcd;
  .played,
  .loaded {
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
  }
  .played {
    z-index: 1;
    background: #666;
    .thumb {
      position: absolute;
      top: 0;
      right: 0;
      width: 12px;
      height: 12px;
      margin: -3px -6px 0 0;
      border-radius: 50%;
      background: #666;
      cursor: pointer;
      transform: scale(0);
      transition: transform .3s ease-in-out;
    }
  }
  .loaded {
    background: #aaa;
    transition: width .3s ease-in-out;
  }
  &:hover {
    .thumb {
      transform: scale(1);
    }
  }
}
</style>
