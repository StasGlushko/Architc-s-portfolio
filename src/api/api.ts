import axios from 'axios'

const baseURL = ''

export const instanceAxios = axios.create({
	baseURL,
})

// get token in localStorage
// instanceAxios.interceptors.request.use(config => {
// 	config.headers.Authorization = window.localStorage.getItem('token')
// 	return config
// })
