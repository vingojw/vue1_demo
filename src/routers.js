module.exports = function(router){
	router.map({
		'/':{
			name:'home',
			component: require('./views/home.vue')
		},
		'/about':{
			name:'about',
			component: function(reslove){
				return require(['./views/about.vue'],reslove)
			}
		},
		'/my_views': {
			name:'my_views',
			component: require('./views/my_views.vue')
		},
		'/my_views/:viewId': {
			name:'my_views_detail',
			component: require('./views/my_views_detail.vue'),
			auth: true // 此页面需要用户登录
		},
		'/modal_view': {
			name:'modal_view',
			component: require('./views/modal_view.vue')
		},
		'/select_view': {
			name:'select_view',
			component: require('./views/select_view.vue')
		},
		'/radio_view': {
			name:'radio_view',
			component: require('./views/radio_view.vue')
		},
		'/tab_view': {
			name:'tab_view',
			component: require('./views/tab_view.vue')
		},
		'/slider_view': {
			name:'slider_view',
			component: require('./views/slider_view.vue')
		},
		'/forbidden':{
			name:'forbidden',
			component: require('./views/forbidden.vue')
		},
		'/test':{
			name:'test_view',
			component: require('./views/test.vue')
		},
		'async':{
			//http://forum.vuejs.org/topic/114/vue-router-异步加载的例子
			//http://vuejs.github.io/vue-router/zh-cn/lazy.html
			name:'async',
			component: function(reslove){
				//异步加载，
				//例子
				return require(['./views/async.vue'],reslove)
			}
		},
		'async_loading':{
			//http://forum.vuejs.org/topic/114/vue-router-异步加载的例子
			name:'async_loading',
			component: function(reslove){
				//异步加载，
				//例子
				return require(['./views/async_loading.vue'],reslove)
			}
		},

		//触摸事件
		'touch':{
			name:'touch',
			component:function(reslove){
				return require(['./views/touch.vue'],reslove)
			}
		},
		// not found handler
	    '*': {
	      component: require('./views/not_found.vue')
	    }
	});

	window.routeList=[];
	router.beforeEach(function(transition){
		console.log('before---------------');
		//可以通过在路由中的自定义字段来验证用户是否需要登陆
		// if(transition.to.auth){
		// 	console.log('通过配置路由中自定义的字段验证是否需要登陆');
		// }

		// //如果是中止，这里可以判断用户登录
		// //if(transition.to.path === '/forbidden'){
		if(transition.to.name == 'forbidden'){
			router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
		}

		if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
			router.app.effect='back';
			routeList.splice(routeList.length-1,1);
			console.log(routeList);
		} else {
			router.app.effect='fade';
			routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});
		}

		//setTimeout(function(){
			transition.next();
		//},1000);
	});


	//可以记录访问路径
	router.afterEach(function(transition){
		console.log('-----------------after');
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});
}