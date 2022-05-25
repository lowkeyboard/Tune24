import defaultAxios from 'axios';

const axios = defaultAxios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  baseURL: 'https://my-youtube-24.herokuapp.com/',
  headers: {'Content-Type': 'application/json'},
});

export default axios;
