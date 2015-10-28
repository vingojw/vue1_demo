<template>
<div class="tab">
	<ul class="tab-nav">
		<li v-for="item in renderData">
			<a href="#"
			@click.prevent.stop = "handleTablistClick($event,$index,this)"
			:class="{
				active:$index === activeIndex,
				disabled:item.disabled
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
		methods:{
			handleTablistClick:function(e,index,el){

				if (!this.renderData[index].disabled) this.activeIndex = index
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


/*切换效果 -- 渐隐*/
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


/*切换效果 -- 从右渐入*/
.fadeInRight-enter {
	animation:fadeInRight-in 0.3s ease;
}
.fadeInRight-leave{
	animation:fadeInRight-out 0.3s ease;
}
@keyframes fadeInRight-in {
    0% {
        opacity: 0;
        transform: translate3d(2000px,0,0)
    }

    100% {
        opacity: 1;
        transform: none
    }
}
@keyframes fadeInRight-out {
    0% {
    	opacity: 1;
    	transform: none
    }

    100% {
        opacity: 0;
        transform: translate3d(-2000px,0,0)
    }
}
</style>