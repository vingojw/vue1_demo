
require('./css/common.css');//加载公共样式
require('./css/animate.css');//加载公共样式

var Vue = require('vue');
var VueTouch = require('./vtouch');
var VueRouter = require('vue-router');
var fastclick = require('fastclick');
fastclick.attach(document.body);

// register filters 自定义过滤器  金额格式化，
var filters = require('./filters');

Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

var App = Vue.extend(require('./app.vue'));

//eventBus，全局事件，比如 toast
/*
	要放在 Vue.use(VueRouter); 之前
	因为当使用了 Vue.use(VueRouter)后，改写了 Vue 的实例化方法。
 */
var bus = new Vue();//注意看上面说明

Vue.use(VueTouch);
Vue.use(VueRouter);

var router = new VueRouter(
	{
	  hashbang: true,  //为true的时候 example.com/#!/foo/bar ， false的时候 example.com/#/foo/bar
	  //abstract:true,  //地址栏不会有变化
	  //以下设置需要服务端设置
	  //history: false,   //当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
	  //saveScrollPosition: false
	  linkActiveClass:'custom-active-class' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
	}
);

require('./routers')(router);

router.start(App,'#app');


//全局的事件处理
var eventBus = require('./eventBus')(bus,router);

//想通过此方式绑定一个全局事件,貌似，没啥意义，在eventBus里面必须用到router
//还不如直接绑定到 app.vue然后子组件通过向上传递
Object.defineProperties(Vue.prototype, {
	eventBus:{
		get:function(){
			return eventBus;
		}
	}
});


