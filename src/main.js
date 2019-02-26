import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from 'axios'
//将axios挂载到Vue的原型中
Vue.prototype.$http = axios;
//配置全局的baseURL
axios.defaults.baseURL="http://www.litc.pro:9999/v1"
// 拦截器的添加方式
axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
let token = localStorage.getItem('token')||'';
config.headers.Authorization=token

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //对响应数据的操作
  response=response.data
  return response;
}, function (error) {
  // 对响应错误做点什么
Vue.prototype.$message({
    showClose:true,
    type:"error",
    message:error.response.data.errMsg
  })
});

//导航守卫
router.beforeEach((to, from, next) => {
 //获取localStorage中的token
 let token=localStorage.getItem('token') || ""
  //拦截已登录的状态
  if(token && to.path==='/signIn'){
    return next('/home')
  }

 //拦截未登录的状态
 //判断token是否存在, 判断如果用户登录了就正常导航  若存在表示已登录  登录页面也不能拦截，应当放行
 if(token ||to.path==="/signIn" ||to.path==='/signUp'){
   next()
 }else{
   next('/')
 }

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
