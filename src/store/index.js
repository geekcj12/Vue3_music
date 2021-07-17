import { createStore, createLogger } from 'vuex';
import player from './modules/player';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    player
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
