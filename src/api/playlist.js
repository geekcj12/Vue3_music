import Request from '../utils/request.js';

const getDetail = (id) => {
  return Request.get('/playlist/detail', {
    params: { id }
  });
};

const getProgramDetail = (id) => {
  return Request.get('/dj/program/detail', {
    params: { id }
  })
};

export {
  getDetail,
  getProgramDetail
}
