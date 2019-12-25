import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-app-7f75a.firebaseio.com'
});

export default instance;