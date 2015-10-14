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
				items:[{text:'男',hover:false},{text:'女',hover:false},{text:'女博士',hover:false}]
			}
		},
		components:{
			uiselect:require('../components/select.vue')
		}
	}
</script>

<style>

</style>