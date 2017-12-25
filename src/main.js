import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router/index'



//通过components下的index.js文件导入组件
import components from './components/';
//对导入的组件进行全局组件注册
Object.keys(components).forEach((key)=>{
    Vue.component(key,components[key])
})

/*全局引入VUE YDUI组件*/
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css';


Vue.use(YDUI);
new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router
})

/*Vue.filter('dCurrency', function(value) {
  return '￥'+value
})
Vue.filter('dTofixed', function(value) {
  var isNum = parseFloat(value);
  if( !isNum ){
      alert("请输入数字")
      return "请输入数字";
  } else {
      var value = Math.round(isNum*100)/100;
      var item = value.toString().split(".");
      if(item.length == 1){
          value = value.toString()+".00";
          return value;
      }
      if(item.length > 1){
          if(item[1].length < 2){
              value = value.toString()+"0";
          }
          return value;
      }
  }
})*/
