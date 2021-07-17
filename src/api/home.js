import Request from '../utils/request.js';

const personalized = () => {
  return Request.get('/personalized');
}

const newSong = () => {
  return Request.get('/personalized/newsong');
}

const recommend = () => {
  return Request.get('/program/recommend');
}

export {
  personalized,
  newSong,
  recommend
}
