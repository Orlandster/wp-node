import axios from 'axios'
import api from '../../env/api'

export default class revisions = {
  get(parent) {
    return axios.get(`${api.wpNode}/posts/${parent}/revisions`)
  }

  delete(parent) {
    return axios.delete(`${api.wpNode}/posts/${parent}/revisions`)
  }
}
