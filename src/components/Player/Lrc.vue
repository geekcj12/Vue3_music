<template>
  <div class="lrc">
    <p>{{ currentLrc }}</p>
  </div>
</template>

<script>
import { ref, toRefs, watch } from 'vue';
import { parse } from '../../utils/lrc.js';
import Request from '../../utils/request.js';
export default {
  name: "Lrc",
  props: {
    lrcUrl: {
      type: String,
      default: "",
    },
    currentTime: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const { lrcUrl, currentTime } = toRefs(props);
    const lrcArray = ref([]);
    const currentLrc = ref("");

    let index = 0;

    watch(
      lrcUrl,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          index = 0;
          currentLrc.value = "";
          lrcArray.value = [];
          getLrc(newVal);
        }
      }
    );

    watch(
      currentTime,
      (newVal, oldVal) => {
        if (!lrcArray.value.length) {
          return;
        }
        
        if (newVal > oldVal) {
          for (let i = index; i < lrcArray.value.length; i++) {
            if (newVal >= lrcArray.value[i][0]) {
              index = i;
            }
          }
        } else {
          for (let i = index; i >= 0; i--) {
            if (i === 0) {
              index = i;
              break;
            } else if (newVal >= lrcArray.value[i][0]) {
              index = i;
              break;
            }
          }
        }
        currentLrc.value = lrcArray.value[index][1];
      }
    );

    const getLrc = async url => {
      try {
        const result = await Request.get(url);
        lrcArray.value = parse(result);
      } catch (error) {
        console.error(error);
      }
    }

    return {
      currentLrc,
      lrcArray
    };
  },
};
</script>

<style lang="less">
.lrc {
  width: 300px;
  height: 84px;
  color: #fff;
  h3 {
    text-align: center;
    color: #000;
  }
}
</style>
