<template>
<div class="splitting">
	按需加载的页面 {{msg}}
	<pre>
      app.vue 中 ，先请求内容，再配置路由，再跳转
      //按需加载
      splitting:function(){
        //加载完毕后添加到map中
        var _this = this;

        require.ensure(['./views/splitting.vue'], function(require) {
          var splitting = require('./views/splitting.vue');

          //配置路由
          _this.$route.router.map({
            '/splitting_view':{
              name:'splitting',
              component: splitting
            }
          });

          //跳转
          _this.$route.router.go({name:'splitting'});
        });
      }
	</pre>
</div>
</template>

<script>
	module.exports = {
		//props: ['父组建传的值'],
		data:function(){
			console.log('1-1这里是组建的data,在route的 canActivate之后调用');
			return {
				title:'按需加载',
				msg:'这里返回数据'
			}
		},
		ready:function(){
			this.$root.$set('splittingView',{data:this.$data});
		}
	}
</script>

<style>
	.splitting{
		color:#f60;
	}
</style>