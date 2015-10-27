<template>
	<div class="tab-panel">
		<slot name="tab-panel"></slot>
	</div>
</template>

<script>
	module.exports = {
		props: ['title','disabled'],
		created:function(){
			this.$parent.renderData.push({
				header: this.header,
				disabled: this.disabled
			})
		}
	}
</script>

<style>

</style>