<template>
<div>
  <p>about-{{msg}}</p>
  测试图片
  <!-- <img src='{{imageSrc}}'> 绑定图片的时候使用 :src，如果直接用src 会有如下告警，会出现一个404请求-->
  <!-- [Vue warn]: src="{{imageSrc}}": interpolation in "src" attribute will cause a 404 request. Use v-bind:src instead. -->
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
<img width="20px" height="20px" src="http://img.yaomaiche.com/upload/image/original/carGoods/53cda9a6-05f2-4cae-a778-02f358c9cad6.png" alt="">
  <img v-bind:src="imageSrc">
  <img v-bind:src="'http://'+imageSrc"><!--拼接方式-->
  <div class="img_holder"></div>

  图片下的文字111
  {{ 1000000|price }}
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
/*注释*/
	.img_holder1{
		width:100%;
		padding-bottom: 100%;
		background: url(../images/logo.png) no-repeat;
		background-size:cover;
	}
</style>
