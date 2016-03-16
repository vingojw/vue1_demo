<template>
<div>
<p>
	触摸事件
</p>
<div class="touch_area" @click="click" >fastclick-click(点击){{eventLog}}</div>
<div class="touch_area" v-touch:tap="tap" >hammerjs-tap(点击){{eventLog}}</div>
<div class="touch_area" v-touch:swipe="swipe" >hammerjs-swipe(快速滑){{eventLog}}</div>
<div class="touch_area" v-touch:press="press(this)" >hammerjs-Press(长按 超过500ms触发){{eventLog}}</div>
<div class="touch_area" v-touch:pinchin="pinchin" >hammerjs-pinchin(双指缩小)此处无法滚动页面{{eventLog}}</div>
<div class="touch_area" v-touch:pinchout="pinchout" >hammerjs-pinchout(双指放大)此处无法滚动页面{{eventLog}}</div>

<pre style="overflow:auto;">
Pan事件：在指定的dom区域内，
一个手指放下并移动事件

Pinch事件：在指定的dom区域内，
两个手指（默认为两个手指，多指触控需要单独设置）

Press事件：在指定的dom区域内触屏版本的点击事件

Swipe事件：在指定的dom区域内，
一个手指快速的在触屏上滑动。即我们平时用到最多的滑动事件。

Tap事件：在指定的dom区域内，
一个手指轻拍或点击时触发该事件(类似PC端的click)。
该事件最大点击时间为250毫秒，
如果超过250毫秒则按Press事件进行处理。

</pre>
<a href="http://www.cnblogs.com/iamlilinfeng/p/4239957.html">关于各个手势的说明</a>

</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				eventLog:''
			}
		},
		methods:{
			click:function(){
				this.eventLog = 'click:' + ( Math.random()*100|0 );
			},
			tap:function(){
				this.eventLog = 'tap:' + ( Math.random()*100|0 );
			},
			swipe:function(){
				this.eventLog = 'swipe:' + ( Math.random()*100|0 );
			},
			press:function(e){
				this.eventLog = 'press:' + ( Math.random()*100|0 );
			},
			pinchin:function(){
				this.eventLog = 'pinchin:' + ( Math.random()*100|0 );
			},
			pinchout:function(){
				this.eventLog = 'pinchout:' + ( Math.random()*100|0 );
			}
		}
	}
</script>

<style>
	.touch_area{
		height:300px;
		background:#45a3e9;
		margin-bottom:50px;
	}

</style>