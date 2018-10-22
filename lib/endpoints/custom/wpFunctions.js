const axios = require('axios');
const api = require('../../env/api');

module.exports = class posts = {
  get(wpFunctions) {
    return axios.get(`${api.wpNode}/wp-functions`, wpFunctions)
  }
}
