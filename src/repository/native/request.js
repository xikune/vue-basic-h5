import AxiosInterceptor from 'config/'
import axios from 'axios'
class Ajax extends AxiosInterceptor {
  requestSuccessFunc (requestConfig) {
    return super.requestSuccessFunc(requestConfig)
  }

  requestFailFunc (requestError) {
    return super.requestFailFunc(requestError)
  }

  responseSuccessFunc (responseConfig) {
    return super.responseSuccessFunc(responseConfig)
  }

  responseFailFunc (responseError) {
    return super.responseFailFunc(responseError)
  }

  create () {
    const instance = axios.create()
    // 请求拦截
    instance.interceptors.request(this.requestSuccessFunc, this.requestFailFunc)
    // 响应拦截
    instance.interceptors.response(this.responseSuccessFunc, this.responseFailFunc)

    return instance
  }

  post (url, data, config) {
    this.create().post(url, data, config)
  }

  get (url, config) {
    this.create().get(url, config)
  }
}

export default new Ajax()
