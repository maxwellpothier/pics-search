import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID BJW-oQtxVh8KIoltYtzRlTZ-mbDYlt0FDNLJGlhhjnM'
  }
});