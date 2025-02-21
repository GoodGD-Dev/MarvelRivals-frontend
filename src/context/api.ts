import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1/heroes-list/',
  headers: {
    Authorization: 'Token 3415579931b60aa0f1ee50e2e685ba3836b52f42',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// Interceptor para logs de debug
api.interceptors.request.use((request) => {
  console.log('Request Headers:', request.headers)
  return request
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na API:', {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers
    })
    return Promise.reject(error)
  }
)

export default api
