<template>
<div class="tab">
	<ul class="tab-nav">
		<li v-for="item in renderData">
			<a href="#" 
			@click.prevent.stop = "handleTablistClick($event,$index,this)"
			:class="{
				active:$index === activeIndex,
				disabled:disabled === true
			}"
			>{{item.header}}</a>
		</li>
	</ul>
	<slot name="tab-content"></slot>
</div>	
</template>

<script>
	module.exports = {
		props: {
			effect: {
				type: String,
				default: 'fadein'
			}
		},
		data:function(){
			return {
				renderData:[],
				activeIndex: 0
			}
		},
		//这里才是route的生存周期
		route:{
			activate:function(transition){
				//console.log('active');
				//console.log('2-activate');
				this.$root.$set('header',this.title);
				transition.next();
				//此方法结束后，api会调用afterActivate 方法
				//在aftefActivate中 会给组件添加 $loadingRouteData 属性 并设置为true
			}
		},
		methods:{
			handleTablistClick:function(e,index,el){
				if (!el.disabled) this.activeIndex = index
			}
		},
		ready:function(){
			
		}
	}
</script>

<style>

.tab .active{
	color:#fff;
	background:#369;
}

.tab .tab-content{
	position:relative;
}
.tab .tab-panel{
	padding-top: 1px;
}
.tab .tab-panel.hide{
	position: absolute;
	top:0;
}
.fadein-enter{
  animation:fadein-in 0.3s ease;
}
.fadein-leave{
  animation:fadein-out 0.3s ease;
}
@keyframes fadein-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadein-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>