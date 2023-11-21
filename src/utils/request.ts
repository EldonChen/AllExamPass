import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    // 如果登录了，有token，则请求携带token
    // Do something before request is sent
    // if (store.state.userInfo.token) {
    //     config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // }
    return config
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status !== 200) {
      console.error(res)
      return Promise.reject('error')
    } else {
      // 默认只返回data，不返回状态码和message
      // 通过 meta 中的 responseAll 配置来取决后台是否返回所有数据(包括状态码，message和data)
      // const isbackAll = response.config.meta && response.config.meta.responseAll
      // if(isbackAll){
      //     return res
      // }else{
      //     return res.data
      // }
      return res
    }
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default service