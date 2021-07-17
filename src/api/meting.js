import Request from '../utils/request.js';

const getMusic = (id) => {
  return Request.get('https://api.i-meto.com/meting/api', {
    params: {
      server: 'netease',
      type: 'song',
      id
    }
  });
};

export {
  getMusic
}
