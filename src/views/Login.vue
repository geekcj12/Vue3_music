<template>
  <form @submit.prevent="login">
    <input type="text" v-model="formData.phone">
    <input type="password" v-model="formData.password">
    <button>登录</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { phoneLogin } from '../api/login.js';
export default {
  name: 'Login',
  setup() {
    let formData = ref({
      phone: '',
      password: ''
    });
    
    const login = () => {
      phoneLogin(formData.value).then(res => {
        console.log(res);
      });
    };

    return {
      formData,
      login
    }
  }
}
</script>
