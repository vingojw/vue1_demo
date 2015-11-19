
module.exports = function(eventBus,router){
 
	eventBus.$on('cancelCallback',function(child){
		console.log('modal弹窗-页面的cancelCallBack回调，全局事件:eventBus');
	});

	eventBus.$on('showModal',function(){
		var modal = router.app.$refs.indexModal;
		modal.show = true;
		setTimeout(function(){
			modal.show = false;
		},1000);
	});

	return eventBus;
}