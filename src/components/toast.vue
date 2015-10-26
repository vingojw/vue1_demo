<template>
<div>
	<div class="mask_transparent" v-if="toast.show"></div>
	<div class="toast" transition="toast" v-if="toast.show">
		<slot name="content"></slot>
	</div>
</div>
</template>

<script>
	module.exports = {
		props: ['toast']
	}
</script>

<style>
.mask_transparent {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.toast{
	position: absolute;
	top:50%;
	left:50%;
	background: rgba(40, 40, 40, 0.75);
	transform:translateX(-50%) translateY(-50%);
	color:#FFFFFF;
    text-align: center;
    border-radius: 5px;
    padding:15px;
    opacity:1;
    transition:opacity .3s linear;
}


.toast-leave{
	opacity:0;
}

</style>