
require('./css/common.css');//加载公共样式

var Vue = require('vue');
var VueRouter = require('vue-router');


Vue.use(VueRouter);
var App = Vue.extend(require('./app.vue'));
var router = new VueRouter(
	{
	  hashbang: false,  //为true的时候 example.com/#!/foo/bar ， false的时候 example.com/#/foo/bar
	  //abstract:true,  //地址栏不会有变化
	  //以下设置需要服务端设置
	  //history: false,   //当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
	  //saveScrollPosition: false
	}
);

require('./routers')(router);



router.start(App,'#app');

