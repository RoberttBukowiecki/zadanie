import axios from 'axios';

const config = {
  headers: {
    'x-api-key': 'thisisapikey',
  },
};

const apiUrl = 'http://localhost:3005';
export const resolveGetPosts = () =>
  axios
    .get(`${apiUrl}/posts`, config)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err));

export const resolveCreatePost = (payload: {
  title: string;
  description: string;
}) =>
  axios
    .post(`${apiUrl}/posts`, payload, config)
    .then(res => res.data)
    .catch(err => err);

export const resolveGetPost = (id: string) =>
  axios
    .get(`${apiUrl}/posts/${id}`, config)
    .then(res => res.data)
    .catch(err => err);

export const resolveDeletePost = (id: number) =>
  axios
    .delete(`${apiUrl}/posts/${id}`, config)
    .then(res => res.data)
    .catch(err => err);
