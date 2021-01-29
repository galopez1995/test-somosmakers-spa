import axios, { AxiosError } from 'axios'
import store from '@/store'
import router from '@/router'

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'api/' : 'api/',
  withCredentials: true,
  timeout: 2000000
})

axiosInstance.defaults.timeout = 2000000
try {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters['auth/token']
} catch {
  console.log('Not Authorization')
}

function errorResponseHandler(error: AxiosError) {
  // console.log(error)
  store.dispatch('app/hideLoading')
  let messageAlert = ''
  if (error.response && error.response.data) {
    messageAlert = error.response.data.Message
  } else {
    messageAlert = error.message
  }

  store.dispatch('app/alertPrompt', {
    text: messageAlert,
    type: 'error'
  })

  if (error.response && error.response.status === 401) {
    console.log('Not Authorization')
    router.push('/login')
    location.reload()
  }

  return { ...error }
}

axiosInstance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return errorResponseHandler(error)
  }
)

export default axiosInstance
