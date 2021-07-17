import Request from '../utils/request.js';

const phoneLogin = (data) => {
  return Request.get('/login/cellphone', {
    params: data
  });
};

const loginStatus = () => {
  return Request.get('/login/status');
}

export {
  phoneLogin,
  loginStatus
}
