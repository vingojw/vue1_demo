<style>

 .view-detail {
	color:red;
 }
</style>

<template>
<div class="view-detail"> <!--要使用 $loadingRouteData 过渡效果的时候 不能用作片段，必须要在最外层包一层div-->
	这里是{{a}}

	<div v-if="$loadingRouteData">loading.....</div>
	{{$route.query | json}}
</div>
</template>

<script>

	 module.exports = {
	 	data:function(){
	 		return {
	 			a:'a value is temp'
	 		}
	 	},
	 	//这里才是route的生存周期
	 	route:{
			data: function(transition) {
				setTimeout(function(){
					transition.next({a:1});
				},3000);
			}
	 	}
	 }
</script>