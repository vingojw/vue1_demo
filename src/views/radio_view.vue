<template>
<div>
	<uiradio :items.sync="mutilCheckitems" :mutil-check.sync="mutilCheck">
	<h3 slot="title">多选</h3>
	</uiradio>
	<uiradio :items.sync="singleCheckitems" :mutil-check.sync="singleCheck">
	<h3 slot="title">单选</h3>
	</uiradio>
</div>
</template>

<script>
	module.exports = {
		data:function(){
			//因为在 主 vue 里面使用了 keep-alive 标识，所以再次切换到此视图的时候，还是上次切换的状态
			return {
				mutilCheckitems:[{text:'选项一',checked:false},{text:'选项二',checked:false},{text:'选项三',checked:false}],
				singleCheckitems:[{text:'选项一',checked:false},{text:'选项二',checked:false},{text:'选项三',checked:false}],
				mutilCheck:true,
				title:'radio模拟'
			}
		},
		computed:{
			singleCheck:function(){
				return false;
			}
		},
		components:{
			uiradio:require('../components/radio.vue')
		},
		route:{
			activate:function(transition){
				this.$root.$set('header',this.title);
				transition.next();
			}
		}
	}
</script>

<style>

</style>