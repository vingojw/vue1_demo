<template>
<div class="tab">
      <tabs>
      	<div class="tab-content" slot="tab-content">
	        <tab header="one">
	          <p slot="tab-panel">
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
	             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	          </p>
	        </tab>
	        <tab header="two">
	           <p slot="tab-panel">
	              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
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
			tabs : require('../components/tabs.vue'),
			tab  : require('../components/tab.vue')
		}
	}
</script>

<style>

</style>