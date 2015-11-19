module.exports = function(Vue){
	var eventBus = new Vue();

	eventBus.$on('cancelCallback',function(child){
		console.log('modal弹窗-页面的cancelCallBack回调，全局事件:eventBus');
	});

	return eventBus;
}