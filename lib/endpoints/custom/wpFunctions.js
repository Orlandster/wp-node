const axios = require('axios');
const api = require('../../env/api');

module.exports = class posts = {
  get() {
    return axios.get(`${api.wpNode}/wp-functions`)
  }

  create(post) {
    return axios.post(`${api.wpNode}/posts`, post)
  }

  update(post, id) {
    return axios.post(`${api.wpNode}/posts/${id}`, post)
  }

  delete(id) {
    return axios.delete(`${api.wpNode}/posts/${id}`)
  }
}
