<template>
<div>
	  <button type="text" @click = "showModal=true"> 显示该页面modal </button>
	  <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->
	  <modal :show.sync="showModal" :confirmfn.sync="confirmfn"  :cancelfn.sync="cancelfn" v-ref:index-modal>
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">这是嵌入到页面中单独的modal</h3>
      <h3 slot="body">
      	通过设置，以下属性传值
      		:confirmfn.sync="confirmfn"  :cancelfn.sync="cancelfn"
      </h3>
      <slot slot="footer">
      	<p>覆盖掉原来的footer</p>
      </slot>
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
			confirmfn:function(){
				this.showModal = false;
			},
			cancelfn:function(){
				this.showModal = false;
			}
		}
	}
</script>

<style>

</style>