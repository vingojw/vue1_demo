module.exports = function(router){
	router.map({
		'/':{
			name:'home',
			component: require('./views/home.vue')
		},
		'/about':{
			component: require('./views/about.vue')
		},
		'/my_views': {
			name:'my_views',
			component: require('./views/my_views.vue')
		},
		'/my_views/:viewsId': {
			name:'views_deital',
			component: require('./views/my_views_detail.vue')
		},
		'/modal_view': {
			component: require('./views/modal_view.vue')
		},
		'/select_view': {
			name:'select_view',
			component: require('./views/select_view.vue')
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
		//如果是中止，这里可以判断用户登录
		if(transition.to.path === '/forbidden'){
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

}