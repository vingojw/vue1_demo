<template>
  <div>首屏</div>
</template>
<script>
module.exports = {
	data:function(){
		return {
			msg:'aboutMessage',
			title:'home'
		}
	},
	route:{
		activate:function(transition){
			this.$root.$set('header',this.title);
			transition.next();
		}
	},
};
</script>