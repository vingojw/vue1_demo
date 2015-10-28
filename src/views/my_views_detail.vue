<style>

 .view-detail {
	color:red;
 }
</style>

<template>
<div class="view-detail"> <!--要使用 $loadingRouteData 过渡效果的时候 不能用作片段，必须要在最外层包一层div-->
	<p>请求参数{{$route.params | json}}</p>
	<div v-if="$loadingRouteData">正在加载.....</div>
	<p v-text="a"></p>
  <a v-link="{ name: 'my_views_detail', params: { viewId:'123' }, exact: true }">修改参数试试</a>
</div>
</template>

<script>

	 module.exports = {
	 	data:function(){
	 		return {
	 			a:'',
	 			title:'详情'
	 		}
	 	},
	 	//这里才是route的生存周期
	 	route:{
			data: function(transition) {
				setTimeout(function(){
					transition.next({a:'通过' + JSON.stringify(this.$route.params) + '获取的值'});
				}.bind(this),3000);
			},
			activate:function(transition){
				this.$root.$set('header',this.title);
				transition.next();
			}
	 	}
	 }
</script>