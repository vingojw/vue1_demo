<template>
<slot name="title"></slot>
<div v-for="item in items">
	<div  class="switch_box switch_box-txt "
		:class="{'switch_box-on':item.checked}"
		@click = "clickHandler($index)"
	>
		<div class="switch_scroll"></div>
	</div><span v-text="item.text"></span>
	{{item.checked}}
</div>
</template>

<script>
	module.exports = {
		props: ['items','mutilCheck'],
		methods:{
			clickHandler:function(index){
				//多选
				if(this.mutilCheck){
					this.items[index].checked = !this.items[index].checked;
				} else {
					//单选
					for (var i = this.items.length - 1; i >= 0; i--) {
						this.items[i].checked = (i === index)
					};
				}
			}
		}
	}
</script>

<style>
.switch_box {
    position: relative;
    width: 72px;
    height: 28px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 14px;
    background-color: #ccc;
    cursor: pointer;
    -webkit-transition: 200ms background-color ease-in;
    -moz-transition: 200ms background-color ease-in;
    transition: 200ms background-color ease-in;
}

.switch_box.switch_box-on {
    background-color: #37d28e;
}
.switch_box:before,
.switch_box.switch_box-on:before{
    z-index: 1;
    position: absolute;
    top: 0;
    line-height: 28px;
    font-size: 14px;
    color: #fff;
}
.switch_box:before {
    content: "无";
    right: 27px;
    text-indent: 0;
}
.switch_box.switch_box-on:before {
    content: "有";
    left: 27px;
    text-align: left;
}
.switch_box .switch_scroll {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #fff;
    -webkit-transition: 200ms left ease-in;
    -ms-transition: 200ms left ease-in;
    -moz-transition: 200ms left ease-in;
    transition: 200ms left ease-in;
}
.switch_box.switch_box-on .switch_scroll {
    left: 46px;
}
.switch_box-txt{
    line-height: 28px;
    text-indent: 80px;
    color: #b2b2b2;
}
.switch_box-txt.switch_box-on{
    color: #595959;
}
</style>