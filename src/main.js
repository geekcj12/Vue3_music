import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import './index.css';
import 'normalize.css/normalize.css';
import './assets/icons/iconfont.css';
import './assets/css/index.less';
// import './mock/index.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
