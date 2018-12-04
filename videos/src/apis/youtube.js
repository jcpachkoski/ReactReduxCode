import axios from 'axios';

const KEY = 'AIzaSyA6WWQqGx4RZ7IhX4zxY_hrbxTL7TcZG6E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY
  }
});
