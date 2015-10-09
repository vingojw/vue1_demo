
require('./css/common.css');//加载公共样式

var Vue = require('vue');
var VueRouter = require('vue-router');


Vue.use(VueRouter);
var App = Vue.extend(require('./app.vue'));
var router = new VueRouter(
	{
	  hashbang: false,
	  history: true,
	  saveScrollPosition: true
	}	//开启此模式需要服务端设置
);

require('./routers')(router);



router.start(App,'#app');

