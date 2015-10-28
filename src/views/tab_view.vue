<template>
<div>
	<p>切换效果:渐变（默认）</p>
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
				<tab header="three">
					<p slot="tab-panel">
					ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud
					</p>
				</tab>
			</div>
		</tabs>

		<p>通过v-for声明，切换效果左右滑动</p>
		<tabs effect="fadeInRight">
			<div class="tab-content" slot="tab-content">
				<tab v-for="item in list" :header="item.header" :disabled.sync="item.disabled">
				<p slot="tab-panel">
				{{item.content}}
				</p>
				</tab>
			</div>
		</tabs>
</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				title:'tab选项卡',
				list:[
					{header:'one ',content:'blablablablabla...',disabled:false},
					{header:'two ',content:'bilibilibilibli...',disabled:false},
					{header:'three disabled ',content:'',disabled:true},
				]
			}
		},
		components : {
			tabs : require('../components/tabset.vue'),
			tab  : require('../components/tab.vue')
		},
		ready:function(){
			this.$root.$set('header',this.title);
		}
	}
</script>

<style>

</style>