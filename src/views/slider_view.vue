<template>
<div class="swiper-container" v-el:swper>
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
    </div>
</div>
</template>

<script>
	require('../../node_modules/swiper/dist/css/swiper.min.css');
	var Swiper = require('swiper');
	//var swiper = new Swiper('.swiper-container');
	module.exports = {
		//props: ['父组建传的值'],
		data:function(){
			console.log('1-1这里是组建的data,在route的 canActivate之后调用');
			return {
				msg:'这里返回数据'
			}
		},
		ready:function(){
			new Swiper(this.$el);
		}
	}
</script>

<style>
 <style>

    .swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    </style>
</style>