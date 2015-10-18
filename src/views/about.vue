<template>
<div>
  <p>about-{{msg}}</p>
  测试图片
  <div class="img_holder"></div>
  图片下的文字
 </div>
</template>

<script>
module.exports = {
	data:function(){
		return {
			msg:'aboutMessage',
			title:'about'
		}
	},
	route:{
		activate:function(transition){
			this.$root.$set('header',this.title);
			transition.next();
		}
	},
};
</script>
<style>
	img{
		width:100%;
	}
	.img_holder{
		width:100%;
		padding-bottom: 100%;
		background: url(../images/logo.png) no-repeat;
		background-size:cover;
	}
	.img_holder:after{

	}

</style>