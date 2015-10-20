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