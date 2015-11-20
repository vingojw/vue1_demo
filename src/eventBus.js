
module.exports = function(eventBus,router){
 	var refs = router.app.$refs;

	eventBus.$on('showModal',function(opt){
		var modal = refs.indexModal;
		modal.cancelfn = opt.cancel;
		modal.confirmfn = opt.confirm;
		modal.show = true;
	});

	return eventBus;
}