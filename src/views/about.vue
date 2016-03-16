<template>
<div>
  <p>about-{{msg}}</p>
  测试图片
  <!-- <img src='{{imageSrc}}'> 绑定图片的时候使用 :src，如果直接用src 会有如下告警，会出现一个404请求-->
  <!-- [Vue warn]: src="{{imageSrc}}": interpolation in "src" attribute will cause a 404 request. Use v-bind:src instead. -->
  <img v-bind:src="imageSrc">
  <div class="img_holder"></div>
 </div>
</template>

<script>
require('../css/a.css');
module.exports = {
	data:function(){
		return {
			imageSrc:require('../images/logo.png'),
			msg:'aboutMessage',
			title:'about'
		}
	},
	route:{
		activate:function(transition){
			this.$root.$set('header',this.title);
			transition.next();
		}
	}
};
</script>

<style>
	.img_holder{
		width:100%;
		padding-bottom: 100%;
		background: url(../images/logo.png) no-repeat;
		background-size:cover;
	}
</style>
