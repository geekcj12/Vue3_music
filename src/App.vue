<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from './layout/index.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'App',
  components: {
    Layout
  },
  setup() {
    const store = useStore();

    const playList = computed(() => store.state.player.list);

    onMounted(() => {
      // store.dispatch('player/getPlayList');
    });

    return {
      playList
    }
  }
}
</script>
