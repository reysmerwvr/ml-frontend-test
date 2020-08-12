import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': process.env.REACT_APP_API_CONTENT_TYPE_HEADER,
    Accept: process.env.REACT_APP_API_ACCEPT_HEADER,
  },
  responseType: 'json',
  responseEncoding: 'utf8',
});
