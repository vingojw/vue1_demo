
<style>

.p {
  color: red;
}
</style>

<template>
  <p>404</p>
</template>
<script>
module.exports = {
	data:function(){
		return {
			title:'404'
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