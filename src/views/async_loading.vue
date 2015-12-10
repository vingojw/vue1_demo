<template>
<p>
	async loading data
</p>
</template>

<script>
	require('../css/b.css');
	module.exports = {
		
		//props: ['父组建传的值'],
		data:function(){
			return {
				title:'async'
			}
		},
		route:{
			waitForData:true,
			data:function(transition){
				setTimeout(function(){
					transition.next();
				},3000);
			}
		},
		ready:function(){
			this.$root.$set('header',this.title)
		}
	}
</script>