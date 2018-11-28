import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e3bf7a7d3b06421a94b6558b85242522e9169bdda6840eb1631b9ed4e4354d22'
  }
});
