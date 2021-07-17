import { createApp } from 'vue';
// import Loading from './Loading.vue';

const app = createApp({
  render() {
    return <Loading />;
  }
});

const parent = document.createElement('div');
const instance = app.mount(parent);
console.log(instance);
