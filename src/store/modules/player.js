import Request from '../../utils/request.js';
import { getMusic } from '../../api/meting.js';

const state = {
  list: [],
  current: {},
  index: -1,
  loop: ''
};

const getters = {
  playListLength(state) {
    return state.list.length;
  }
};

const actions = {
  async getPlayList({ commit }) {
    try {
      const result = await Request.get('/api/songs');
      if (result.code === 200) {
        commit('SET_PLAYLIST', result.data);
      }
    } catch (e) {
      console.log(e);
    }
  },
  playSong({ commit }, index) {
    commit('SET_CURRENT', index);
  },
  nextSong({ commit }) {
    commit('SET_NEXT_SONG');
  },
  async addSong({ commit }, id) {
    try {
      const result = await getMusic(id);
      const song = result[0];
      commit('ADD_SONG', song);
    } catch (e) {
      console.log(e);
    }
  },
  removeSong({ commit }, index) {
    commit('REMOVE_SONG', index);
  }
};

const mutations = {
  SET_PLAYLIST(state, playList) {
    state.list = playList
  },
  SET_CURRENT(state, index) {
    state.index = index;
    state.current = state.list[state.index];
  },
  SET_NEXT_SONG(state) {
    if (state.list.length === 1) {
      return;
    } else if (state.index < getters.playListLength(state) - 1) {
      state.current = state.list[state.index += 1];
    } else if (state.index === getters.playListLength(state) - 1) {
      mutations.SET_CURRENT(state, 0);
    }
  },
  ADD_SONG(state, song) {
    state.list.push(song);
    mutations.SET_CURRENT(state, state.list.length - 1);
  },
  REMOVE_SONG(state, index) {
    if (getters.playListLength(state) > 0) {
      state.list.splice(index, 1);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
