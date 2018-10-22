const axios = require('axios');
const api = require('../../env/api');

module.exports = class revisions = {
  get(parent) {
    return axios.get(`${api.wp}/posts/${parent}/revisions`)
  }

  delete(parent) {
    return axios.delete(`${api.wp}/posts/${parent}/revisions`)
  }
}
