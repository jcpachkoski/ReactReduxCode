import axios from 'axios';

const KEY = 'AIzaSyA6WWQqGx4RZ7IhX4zxY_hrbxTL7TcZG6E';

// Channels and playlists may show up as results from the request to the youtube API,
// and their ID property will have a different name depending on the kind.
// Therefore, we pass in type: 'video' below.
// Here is the doc : https://developers.google.com/youtube/v3/docs/search/list#type
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 50,
    key: `${KEY}`
  }
});
