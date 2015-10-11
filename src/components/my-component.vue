<style>

 .my-component h2 {
	color:red;
 }
</style>

<template>
	<div class="my-component">
		<div v-show="a" >这里是data 获取完数据过渡之后获取的值 {{a}}</div>
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	 module.exports = {
	 	//props: ['父组建传的值'],
	 	data:function(){
	 	 	console.log('这里是组建的data,在route的 canActivate之后调用');
	 		return {
	 			a:'',
	 			msg: '各个阶段，可以查看控制台输出，message from my-component'
	 		}
	 	},
	 	//这里才是route的生存周期
	 	route:{
		 	canActivate:function(transition){
		    	console.log('canActivate阶段，可以做一些用户验证的事情');
		    	//return authenticationService.isLoggedIn()
		    	return true;
		    },
		    activate:function(transition){
		    	console.log('active');
		    	transition.next();
		    },
			data: function(transition) {
				 console.log('在 data 中获取数据比在 activate 中更加合理 见http://vuejs.github.io/vue-router/zh-cn/pipeline/data.html');
				 transition.next({a:1}); //这里必须要设置一个值 不能是 transition.next();
			},
			deactivate: function (transition) {
				console.log('Bar 销毁!')
				transition.next()
			}
	 	}

	 }
</script>