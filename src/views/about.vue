<template>
  <p>about-{{msg}}</p>
</template>

<script>
module.exports = {
	data:function(){
		return {
			msg:'aboutMessage',
			title:'about'
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
