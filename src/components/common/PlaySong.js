import { useStore } from 'vuex';

export default function () {
  const store = useStore();

  const playSong = (id) => {
    store.dispatch('player/addSong', id);
  };

  return {
    playSong
  };
};
