import Mock from 'mockjs';
import { getSongs } from './songMock.js';

export default Mock.mock(/\/api\/songs/, 'get', getSongs);
