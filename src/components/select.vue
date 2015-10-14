<template>
<div>
	<slot name="title">default title</slot>

   <div class="select" @click.stop="show=!show">
    <div class="select-content">{{chooseval}}</div>
    <div class="select-arrow">
      <span></span>
    </div>
    <ul class="select-wrap" :class="{ 'hide': !show }">
        <li v-for="d in items" :class="{ 'hover': d.hover }" @mouseout="mouseout(d,$index)" @mouseover="mouseover(d,$index)" @click="choose"> {{ d.text }} </li>
    </ul>
  </div>

</div>  
</template>

<script>
	module.exports = {
		props: ['items'],
		data:function(){
			return {
				show : false,
				ishover:false,
				chooseval:'请选择'
			}
		},
		methods:{
			mouseover:function(item,index){
				item.hover = true;
			},
			mouseout:function(item,index){
				item.hover = false;
			},
			choose:function(e){
				this.chooseval = e.target.innerHTML;
			}
		},
		ready:function(){
			document.body.addEventListener('click',function(){
				this.show = false;
			}.bind(this),false);
		}
	}
</script>

<style>
    .select{
      width:325px;
      height:40px;
      position: relative;
      border:1px solid #ddd;
      background:#fff;
      color:#ddd;
    }
    .select-content{
      margin-top:12px;
      margin-left: 20px;
      cursor:default;
    }

    .select-arrow{
      width:38px;
      height:38px;
      position: absolute;
      right:1px;
      top:1px;
      background:#ddd;
    }
    .select-arrow span{
      position:absolute;
      margin:13px;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 14px solid #999;
    }
    .select-wrap{
      margin: 0 0 0 -1px;;
      padding: 0;
      position: absolute;
      z-index: 2;
      width: 100%;
      top: 100%;
      border:1px solid #ddd;
      background:#fff;
    }
    .select-wrap li{
      height:40px;
      line-height: 40px;
      padding-left:18px;
      color:#000;
    }
    .select-wrap li.hover{
      background:#3e3e3e;
    }
    .select-wrap.hide{
      display: none;
    }

</style>