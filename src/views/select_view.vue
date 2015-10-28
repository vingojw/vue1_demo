<template>
<div>
	  <uiselect :items.sync="items">
		<h3 slot="title">性别</h3>
      </uiselect>
</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				items:[{text:'男',hover:false},{text:'女',hover:false}],
				title:'select模拟'
			}
		},
		components:{
			uiselect:require('../components/select.vue')
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