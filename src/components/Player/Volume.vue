<template>
  <div class="volume">
    <button
      class="iconfont"
      :class="[isMute ? 'icon-VolumeOff' : 'icon-VolumeUp']"
      @click="toggleMute"
    ></button>
    <div class="volume-bar" ref="volumeBar">
      <div class="volume-current" :style="{ width: `${modelValue * 100}%` }"></div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, computed, onMounted } from 'vue';
export default {
  name: 'Volume',
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const { modelValue } = toRefs(props);
    const { emit } = context;
    const volumeBar = ref(null);
    let lastVolumeValue = ref(modelValue.value);
    const isMute = computed(() => modelValue.value === 0);

    const updateValue = (value) => {
      emit('update:modelValue', value);
    };

    const toggleMute = () => {
      if (isMute.value) {
        updateValue(lastVolumeValue.value);
      } else {
        lastVolumeValue.value = modelValue.value;
        updateValue(0);
      }
    };

    onMounted(() => {
      volumeBar.value.addEventListener('click', e => {
        const volumeValue = Math.ceil((e.offsetX / volumeBar.value.offsetWidth) * 100) / 100;
        updateValue(volumeValue);
      });
    });
    
    return {
      volumeBar,
      lastVolumeValue,
      isMute,
      toggleMute,
      updateValue
    };
  }
}
</script>

<style lang="less">
.volume {
  display: inline-block;
  position: relative;
}
.volume-bar {
  position: absolute;
  right: 100%;
  top: 50%;
  width: 70px;
  height: 6px;
  cursor: pointer;
  background: #cdcdcd;
  transform: translateY(-50%);
  .volume-current {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 100%;
    background: #666;
    transition: width .2s ease-in-out;
  }
}
</style>
