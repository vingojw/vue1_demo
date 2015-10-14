<template>
<div>
	  <button type="text" @click = "showModal=true"> 显示该页面modal </button>
	  <modal :show.sync="showModal" v-ref:index-modal> <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->
      <!--
        you can use custom content here to overwrite
        default content
      -->

      <h3 slot="body"><span v-text="modalbody"></span></h3>
      <h3 slot="header">含有弹窗的子页面</h3>
    </modal>
</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				showModal:false,
				modalbody:'含有弹窗的子页面'
			}
		},
		components:{
			modal:require('../components/modal.vue')
		}
	}
</script>

<style>

</style>