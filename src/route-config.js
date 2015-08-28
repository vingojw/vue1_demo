module.exports = function(router){
	router.map({
		'/about':{
			component: require('./components/about.vue')
		},
		'/my-component': {
			component: require('./components/my-component.vue')
		},
		// not found handler
	    '*': {
	      component: require('./components/not-found.vue')
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
		if(transition.to.path === '/forbidden'){
			router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
		} else {
			 transition.next();
			 console.log('beforeEach');
		}
	});

}