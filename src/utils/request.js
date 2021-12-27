import axios from 'axios'
import { Store } from 'vuex'
const service = axios.create({
  baseURL: 'http://localhost:9002/letsgo',
  timeout: 5000,
})

export default service
