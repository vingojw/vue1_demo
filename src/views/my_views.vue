<style>

 .my-views h2 {
	color:red;
 }
</style>

<template>
<div class="view"> <!--要使用 $loadingRouteData 过渡效果的时候 不能用作片段，必须要在最外层包一层div-->
	<div v-if="$loadingRouteData" >Loading ...这里是在data钩子切换的时候获取的$loadingRouteData的元素属性，此操作必须是在一个延迟方法中进行的</div>
	<div v-if="!$loadingRouteData" class="my-views">
		<div v-show="a" >这里是data 获取完数据过渡之后获取的值 {{a}}</div>
		<h2>{{msg}}</h2>
	</div>
<p>请求参数{{$route.params | json}}</p>
</div>
</template>

<script>
	 module.exports = {
	 	//props: ['父组建传的值'],
	 	data:function(){
	 	 	console.log('1-1这里是组建的data,在route的 canActivate之后调用');
	 		return {
	 			a:'',
	 			msg: '各个阶段，可以查看控制台输出，message from my-views',
	 			title:'my_views'
	 		}
	 	},
	 	//这里才是route的生存周期
	 	route:{
	 		//waitForData: true, //数据加载完毕后再切换试图，也就是 点击之后先没反应，然后数据加载完，再出发过渡效果
		 	canActivate:function(transition){
		    	//console.log('canActivate阶段，可以做一些用户验证的事情');
		    	//return authenticationService.isLoggedIn()
		    	console.log('1-canActivate');
		    	//debugger;
		    	return true;
		    },
		    activate:function(transition){
		    	//console.log('active');
		    	console.log('2-activate');
		    	this.$root.$set('head',this.title);
		    	transition.next();

		    	//此方法结束后，api会调用afterActivate 方法
		    	//在aftefActivate中 会给组件添加 $loadingRouteData 属性 并设置为true
		    },
			data: function(transition) {
				var _this = this;
				console.log('3-data--在 data 中获取数据比在 activate 中更加合理 见http://vuejs.github.io/vue-router/zh-cn/pipeline/data.html');

					setTimeout(function(){
						//在 transition.next({a:1}) 之前
						//这里 _this.$loadingRouteData 是 true  因为此时获取
						transition.next({a:'通过' + JSON.stringify(this.$route.params) + '获取的值'});
						//这里 _this.$loadingRouteData 就是false了。  vue-router.js :2250 左右
					}.bind(this),3000);


			},
			deactivate: function (transition) {
				console.log('4');
				console.log('Bar 销毁!')
				transition.next()
			}
	 	}
	 }
</script>