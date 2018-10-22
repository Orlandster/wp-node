import axios from 'axios'
import api from '../../env/api'

export default class posts = {
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
