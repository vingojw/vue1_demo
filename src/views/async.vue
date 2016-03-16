<template>
<p>
	<a href="http://vuejs.github.io/vue-router/zh-cn/lazy.html" target="_blank">动态组件载入 lazy load</a>
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
		ready:function(){
			this.$root.$set('header',this.title)
		}
	}
</script>