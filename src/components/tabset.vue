<template>
	<div>
		<ul class="nav">
			<li v-for="item in renderData">{{item.title}}</li>
		</ul>
		<slot name="tab-content"></slot>
	</div>
</template>

<script>
	module.exports = {
		//props: ['父组建传的值'],
		data:function(){
			return {
				renderData:[],
				msg:'这里返回数据'
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
				//console.log('2-activate');
				this.$root.$set('header',this.title);
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
						transition.next({a:1}); //这里必须要设置一个值 不能是 transition.next();
						//这里 _this.$loadingRouteData 就是false了。  vue-router.js :2250 左右
					},800);
			},
			deactivate: function (transition) {
				console.log('4');
				console.log('Bar 销毁!')
				transition.next()
			}
		},
		ready:function(){
			//事件绑定
			document.body.addEventListener('click',this.hideWrap,false);
		},
		destroyed:function(){
			//移除事件
			document.body.removeEventListener('click',this.hideWrap,false);
			console.log('组件销毁-移除事件绑定');
		}
	}
</script>

<style>

</style>