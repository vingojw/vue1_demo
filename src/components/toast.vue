<template>
<div>
	<div class="mask_transparent" v-if="show"></div>
	<div class="toast" transition="toast" v-if="show">
		<slot name="content"></slot>
	</div>
</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				show : false
			}
		},
		props: ['toast'],
		watch:{
			//当给toast设置内容的时候就显示，如果没有定义时间，那么2.5秒后渐隐
			'toast.content':function(val,oldVal){

				if(val == ''){
					return;
				}

				var _this = this;
				_this.show = true;
				setTimeout(function(){
					_this.show = false;

					setTimeout(function(){
						_this.toast.content = '';
						delete _this.toast.timer ;
					},310);//这里的300是动画的延迟，故意多设置10毫秒

				},_this.toast.timer || 2500);
			}
		},
		created:function(){
			console.log('created');
		},
		beforeCompile:function(){
			console.log('beforeCompile');
		},
		compiled:function(){
			console.log('compiled');
		},
		ready:function(){
			console.log('ready');
		},
		attached:function(){
			console.log('attached');
		},
		detached:function(){
			console.log('detached');
		},
		beforeDestroy:function(){
			console.log('beforeDestroy');
		},
		destroyed:function(){
			console.log('destroyed');
		}
	}
</script>

<style>
.mask_transparent {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.toast{
	position: absolute;
	top:50%;
	left:50%;
	background: rgba(40, 40, 40, 0.75);
	transform:translateX(-50%) translateY(-50%);
	color:#FFFFFF;
    text-align: center;
    border-radius: 5px;
    padding:15px;
    opacity:1;
    transition:opacity .3s linear;
}


.toast-leave{
	opacity:0;
}

</style>