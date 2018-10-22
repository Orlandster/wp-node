const axios = require('axios');
const api = require('../../env/api');

module.exports = class posts = {
  get() {
    return axios.get(`${api.wp}/posts`)
  }

  create(post) {
    return axios.post(`${api.wp}/posts`, post)
  }

  update(post, id) {
    return axios.post(`${api.wp}/posts/${id}`, post)
  }

  delete(id) {
    return axios.delete(`${api.wp}/posts/${id}`)
  }
}
