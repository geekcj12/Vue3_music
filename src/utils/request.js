import axios from 'axios';

const service = axios.create({
  baseURL: 'https://neteaseapi.nishinonanase.moe',
  timeout: 5000,
  headers: {
    'content-type': 'application-json'
  }
});

service.interceptors.request.use(
  config => {
    // const {token} = store.state.userInfo
    // if (token) {
    //   config.headers['token'] = token
    // }
    // store.dispatch('loading/setLoading', true)
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

service.interceptors.response.use(
  response => {
    // store.dispatch('loading/setLoading', false)
    // if (response.data.success) {
    //   Message({
    //     type: 'success',
    //     message: response.data.msg,
    //     showClose: true
    //   })
    // } else {
    //   Message({
    //     message: response.data.msg,
    //     showClose: true
    //   })
    //   return Promise.reject(response.data.msg)
    // }
    if (response.status >= 200) {
      return response.data;
    }
    
    return response;
  },
  error => {
    console.log(error)
    // store.dispatch('loading/setLoading', false)
    if (error.response.status === 401) {
      // logout()
    }
    return Promise.reject(error);
  }
)

export default service;
