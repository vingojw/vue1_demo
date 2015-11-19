<template>
<div>
	  <button type="text" @click = "showModal=true"> 显示该页面modal </button>
	  <button type="text" @click = "showM"> 显示主页的modalEventBus </button>
	  <modal :show.sync="showModal" v-ref:index-modal> <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->
      <!--
        you can use custom content here to overwrite
        default content
      -->

      <h3 slot="header">头部内容</h3>
      <h3 slot="body"><span v-text="modalbody"></span></h3>
    </modal>
</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				showModal:false,
				modalbody:'body内容'
			}
		},
		components:{
			modal:require('../components/modal.vue')
		},
		route:{
			activate:function(transition){
				this.$root.$set('header',this.modalbody);
				transition.next();
			}
		},
		methods:{
			showM:function(){
				debugger;
				this.eventBus.$dispatch('showModal',this);
			}
		}
	}
</script>

<style>

</style>