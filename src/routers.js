module.exports = function(router){
	router.map({
		'/':{
			name:'home',
			component: require('./views/home.vue')
		},
		'/about':{
			name:'about',
			component: require('./views/about.vue')
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
			name:'test',
			component: require('./views/test.vue')
		},
		// not found handler
	    '*': {
	      component: require('./views/not_found.vue')
	    }
	});

	// router.beforeEach((transition) => {
	// if (transition.to.path === '/forbidden') {
	// 	router.app.authenticating = true
	// 	setTimeout(() => {
	//     router.app.authenticating = false
	//     alert('this route is forbidden by a global before hook')
	//     transition.abort()
	//   }, 1500)
	// } else {
	//   transition.next()
	// }
	// })

	router.beforeEach(function(transition){
		//可以通过在路由中的自定义字段来验证用户是否需要登陆
		if(transition.to.auth){
			console.log('通过配置路由中自定义的字段验证是否需要登陆');
		}

		//如果是中止，这里可以判断用户登录
		//if(transition.to.path === '/forbidden'){
		if(transition.to.name == 'forbidden'){

			router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
		} else {
			 transition.next();
			 console.log('每次路由开始的时候beforeEach');
		}
	});


	//可以记录访问路径
	router.afterEach(function(transition){
		var routeList = router.app.routeList;

		routeList.$set(routeList.length, {
			name : transition.to.name,
			path : transition.to.path,
			query : transition.to.query,
			params : transition.to.params,
			timer: +new Date
		});
	});

}