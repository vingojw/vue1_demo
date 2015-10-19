<style>

.view {
  transition: all .3s ease;
  border:2px solid red;
  margin-top:20px;
}
.fade-enter, .fade-leave {
  opacity: 0;
  transform: translate3d(0, -5px, 0);
}
/*.v-link-active {
  color: red;
}*/

/*css next 测试*/
  @keyframes testloading {
    0% {
      opacity: 0.2;
    }
    65% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }

.testa {
    display: flex;
}
/*css next 测试*/

nav > a{
  background:#369;
  color:#fff;
  padding:3px 5px;
  display: inline-block;
}

</style>

<template>
  <div class="app">
    <p v-if="authenticating" style="color:red">Authenticating...</p>
    <h1 v-text="header">App Header</h1>
    <nav>
    <a v-link="{ name: 'my_views' }">my-views</a>
    <a v-link="{ name: 'my_views_detail', params: { viewId:vvv } }">my-views --> viewId:123</a>
    <a v-link="{ name: 'about' }">about</a>
    <a v-link="{ path: '/forbidden' }">forbidden</a>
    <a v-link="{ path: '/nofound' }">404</a>
    <a v-link="{ path: '/modal_view' }">含有弹窗的页面</a>
    <a v-link="{ name: 'select_view' }">含有select的页面</a>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    </nav>
    <!-- <router-view class="view" transition="fade" transition-mode="out-in"></router-view> -->
    <router-view class="view" transition="fade" transition-mode="out-in"></router-view>

    <modal :show.sync="showModal" v-ref:index-modal> <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->
      <!--
        you can use custom content here to overwrite
        default content
      -->

      <h3 slot="body"><span v-text="modalbody"></span></h3>
      <h3 slot="header">内容</h3>
    </modal>

    <aside v-ref:aside>
      <div slot="body">
          <h4>Text in aside</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <p> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
          <pre class=" language-javascript" data-language="JavaScript"><code class=" language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>talk <span class="token operator">===</span> cheap<span class="token punctuation">)</span><span class="token punctuation">{</span>
  code<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'block'</span>
<span class="token punctuation">}</span>
        </code></pre>
        <div class="aside-footer">
          <button type="button" class="btn btn-default">Close</button>
        </div>

      </div>
    </aside>

  </div>
</template>

<script>

module.exports = {
    data: function() {
      return {
        vvv:'参数',
        header:'首页',
        showLogin: false,
        showAside: false,
        showModal:false,
        authenticating: false,
        showAwesomeSheet:false,
        as:{},
        modalbody:"可以通过在组件中调用 this.$parent.modalbody='' 来修改这里的内容"
      };
    },
    components:{
      modal:require('./components/modal.vue')
    },
    created:function(){

      this.$on('confirmCallback',function(child){
        //设置元素的值
        //child.$els.inp.$set('value','1');
        console.log(child);
        //获取dom元素  child.$els.inp
        console.log(child.$els.inp.value);
        console.log('confirmCallback');
        console.log('1秒钟后跳转到 my-views');
        setTimeout(function(){
           this.$root.$route.router.go('/my_views');
           child.show = false;
        }.bind(this),1000);

        //debugger;
      });
      this.$on('cancelCallback',function(child){
        console.log(child);
        console.log('cancelCallback');
      });

    },
    methods:{
      nonBreaking:function(){
        console.log('nonBreaking');
      },
      //底部菜单
      awesomeSheetHanlder:function(){
        //this.as[(this.showAwesomeSheet = !this.showAwesomeSheet) ? 'show':'hide']();
      }
    },
    ready:function(){
      //this.$set('as',new AwesomeSheet({ touchDismiss: false }));
    }
}

</script>
