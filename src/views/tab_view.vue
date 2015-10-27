<template>
<div>
      <tabs>
      	<div class="tab-content" slot="tab-content">
	        <tab header="one">
	          <p slot="tab-panel">
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	          </p>
	        </tab>
	        <tab header="two">
	           <p slot="tab-panel">
	              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	           </p>
	        </tab>
	        <tab header="three" disabled>
	          ...
	        </tab>
        </div>
      </tabs>
</div>
</template>

<script>
	module.exports = {
		components : {
			tabs : require('../components/tabset.vue'),
			tab  : require('../components/tab.vue')
		}
	}
</script>

<style>

</style>