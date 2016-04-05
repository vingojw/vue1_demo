<style>



/*
关于 v-cloak 参考： http://vuejs.org/api/#v-cloak

*/
[v-cloak] {
  display: none;
}


.view {
  transition: all .3s ease;
  border:2px solid #000;
  margin-top:20px;
  padding:1em;
}


/*.fade-enter, .fade-leave {
  opacity: 0;
  transform: translate3d(0, -5px, 0);
}*/
.fade-enter{
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}

.fade-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);

}

.back-enter {
  opacity: 1;
  -webkit-transform: translate3d(-110%, 0, 0);
          transform: translate3d(-110%, 0, 0);

}
.back-leave{
  opacity: 0;
  /*transform: translate3d(100%, 0, 0);*/
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}


.v-link-active {
  color: red;
}

.custom-active-class {
  color: #f60;
}

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

nav > a,button{
  color: #000;
  padding: 3px 5px;
  margin: 2px;
  display: inline-block;
  border: 2px solid #000;
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <div class="app">
    <p v-if="authenticating" style="color:red">Authenticating...</p>
    <h1 v-text="header">App Header</h1>
    <p>当前路径: {{$route.path}}</p>
    <nav>
    <a v-link="{ name: 'home', exact: true }">首页</a>
    <a v-link="{ name: 'my_views', exact: true }">组件生命周期</a>
    <a v-link="{ name: 'my_views_detail', params: { viewId:vvv } }">url传值</a>
<!--     <a v-link="{ path: '/my_views?viewId='+vvv}">修改为原来/foo?user=1 的方式（变量）</a>
    <a v-link="{ path: '/my_views?viewId=vvv'}">修改为原来/foo?user=1 的方式（字符串）</a> -->
    <a v-link="{ name: 'about' }">about</a>
    <!-- 如果是一个不存在的页面，那么用name 属性 -->
    <a v-link="{ name: 'forbidden' }">在路由全局设置终止</a>
    <a v-link="{ path: '/nofound' }">404</a> <!--这里不能使用 具名路径-->
    <a v-link="{ name: 'modal_view' }">modal弹窗</a>
    <a v-link="{ name: 'select_view' }">select</a>
    <a v-link="{ name: 'radio_view' }">radio</a>
    <a v-link="{ name: 'tab_view' }">tab选项卡</a>
    <a v-link="{ name: 'slider_view' }">slider with swiper</a>
    <a v-link="{ name: 'test_view' }">test.vue 测试字符,压缩后</a>
    <a v-link="{ name: 'async' }">动态组件载入 lazy load</a>
    <a v-link="{ name: 'async_loading' }">动态组件载入 lazy load(阻塞)，点击先请求数据，请求完毕后(3s)切换</a>
    <a v-link="{ name: 'touch' }">touch事件</a>
    </nav>
    <p>
    <button @click="showModal = !showModal">全局弹窗</button>
    <button @click="showGlobalModal">全局弹窗自定义</button>
    <button @click="showToast">Toast 默认 2.5s</button>
    <button @click="customShowToast">Toast自定义时长 4s</button>
    <button @click="showLeftAside = true">Aside left</button>
    <button @click="showRightAside = true">Aside right</button>
    <button @click="showTopAside = true">Aside top</button>
    <button @click="showBottomAside = true">Aside bottom</button>
    <button @click="renderLinks=!renderLinks">循环生成的链接</button>
    </p>
    <nav v-show="renderLinks">
      <a v-for="item in items" v-link="item" v-text="item.name"></a>
    </nav>
    <router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>

    <modal :show.sync="showModal" v-ref:index-modal > <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325 搜 Shorthands -->
      <!--

        你可以添加自定义的内容
        比如：可以通过

          <h3 slot="body">自定义内容</h3>

        然后在组件模板（modal.vue）中
        ···                                          ···
        <div class="modal-body">                     <div class="modal-body">
          <slot name="body">
            default body           最终会生成 =>        <h3 slot="body">自定义内容</h3>
          </slot>
        </div>                                       </div>
        ···                                          ···

        如果不定义 <h3 slot="body">自定义内容</h3> ，那么就是
        ···
        <div class="modal-body">
            default body
        </div>
        ···

      -->

      <h3 slot="body"><span v-text="modalbody"></span></h3>
      <h3 slot="header">内容</h3>
    </modal>
    <!--globalmodal-->
    <globalmodal :globalmodal.sync="globalModal"></globalmodal>

    <!--右-->
    <asidebar v-ref:asideR  :show.sync="showRightAside"  :placement.sync="right"  :header.sync="asideLeftTit"  :width.sync="asidewidth">
      <div slot="body">
      <!--自定义内容-->
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium repudiandae accusantium nostrum doloribus voluptas accusamus consectetur quod inventore provident magni id sit, dolor harum totam. Odio ducimus error architecto.
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showRightAside=false">在组件声明的时候定义的close事件</button>
        </div>
      </div>
    </asidebar>
    <!--左-->
    <asidebar v-ref:asideL  :show.sync="showLeftAside"  :placement.sync="left"  :header.sync="asideRightTit"  :width.sync="asidewidth">
      <div slot="body">
        <!--自定义内容-->
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium repudiandae accusantium nostrum doloribus voluptas accusamus consectetur quod inventore provident magni id sit, dolor harum totam. Odio ducimus error architecto.
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showLeftAside=false">在组件声明的时候定义的close事件</button>
        </div>
      </div>
    </asidebar>
    <!--上-->
    <asidebar v-ref:asideL  :show.sync="showTopAside"  :placement.sync="top"  :header.sync="asideTopTit" >
      <div slot="body">
        <!--自定义内容-->
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium repudiandae accusantium nostrum doloribus voluptas accusamus consectetur quod inventore provident magni id sit, dolor harum totam. Odio ducimus error architecto.
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showTopAside=false">在组件声明的时候定义的close事件</button>
        </div>
      </div>
    </asidebar>
    <!--下-->
    <asidebar v-ref:asideL  :show.sync="showBottomAside"  :placement.sync="bottom"  :header.sync="asideBottomTit" >
      <div slot="body">
        <!--自定义内容-->
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium repudiandae accusantium nostrum doloribus voluptas accusamus consectetur quod inventore provident magni id sit, dolor harum totam. Odio ducimus error architecto.
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showBottomAside=false">在组件声明的时候定义的close事件</button>
        </div>
      </div>
    </asidebar>

    <p>页面状态 <pre style="width:100%;overflow: auto;">{{$data | json}}</pre></p>

    <!--toast-->
    <toast v-ref:toast :toast.sync="toast">
       <div slot = "content" >{{toast.content}}</div>
    </toast>







  </div>
</template>
<script>

module.exports = {
    data: function() {
      return {
        renderLinks:false,
        items:{
          '/':{
            name:'home'
          },
          '/my_views': {
            name:'my_views'
          },
          '/my_views/:viewId': {
            name:'my_views_detail'
          },
          '/about':{
            name:'about'
          },
          '/forbidden':{
            name:'forbidden'
          },
          '/modal_view': {
            name:'modal_view'
          },
          '/select_view': {
            name:'select_view'
          },
          '/radio_view': {
            name:'radio_view'
          },
          '/tab_view': {
            name:'tab_view'
          },
          '/slider_view': {
            name:'slider_view'
          },
          '/test':{
            name:'test_view'
          },
          'async':{
            //http://forum.vuejs.org/topic/114/vue-router-异步加载的例子
            name:'async'
          },
          'async_loading':{
            //http://forum.vuejs.org/topic/114/vue-router-异步加载的例子
            name:'async_loading'
          },
          //触摸事件
          'touch':{
            name:'touch'
          }
        },
        effect          : 'fade',
        vvv             : '参数',        //用于 传参
        header          : '首页',
        showModal       : false,         //用于 modal
        authenticating  : false,         //用于 forbidden
        showAside       : false,         //用于 aside
        right           : 'right',       //用于 aside
        left            : 'left',        //用于 aside
        top             : 'top',         //用于 aside
        bottom          : 'bottom',      //用于 aside
        showRightAside  : false,         //用于 asideaside 方向
        showLeftAside   : false,         //用于 asideaside 方向
        showTopAside    : false,         //用于 asideaside 方向
        showBottomAside : false,         //用于 asideaside 方向
        asideLeftTit    : 'left-title',  //用于 aside
        asideRightTit   : 'right-title', //用于 aside
        asideTopTit     : 'right-title', //用于 aside
        asideBottomTit  : 'right-title', //用于 aside
        title           : 'title',       //用于 aside
        asidewidth      : 350,           //用于 aside
        toast           : {content:'正在加载。。。'},         //用于 toast
        modalbody       : "可以通过在组件中调用 this.$parent.modalbody='' 来修改这里的内容",
        myViewsData     : null, //列表页
        myViewDetail    : null, //详情页
        modalView       : null, //弹窗页
        splittingView   : null, //按需加载
        routeList       : [],    //访问周期中所访问了那些路径,在route.js中设置
        eventLog        : '',    //触摸事件的时候log
        globalModal     :{ //自定义弹层
          title:'',
          content:'',
          confirmFn:function(){},
          cancelFn:function(){},
          rd:0
        }
      };
    },
    components:{
      modal:require('./components/modal.vue'),
      globalmodal:require('./components/globalmodal.vue'),
      asidebar:require('./components/aside.vue'),
      toast:require('./components/toast.vue')
    },
    created:function(){

    },
    //组件事件通信
    //子组件可以通过 this.$dispatch('confirmCallback',this); 来触发父组件events中声明的事件
    events:{
      confirmCallback:function(child){
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
      },
      cancelCallback:function(child){
        console.log('modal-cancelCallback');
      }
    },
    methods:{
      nonBreaking:function(){
        console.log('nonBreaking');
      },
      showToast:function(){
        //直接设置，默认2.5秒后自动消失
        this.toast.content = 'toast  2.5s...';
        //如果同时设置多个，则只会显示最后一个
        // this.toast.content = 'toast  2.6s...';
        // this.toast.content = 'toast  2.7s...';
        // this.toast.content = 'toast  2.8s...';
      },
      //自定义时长
      customShowToast:function(){
        this.toast = { content : '自定义时长4s...', timer : 4000};
      },
      //有时候想要自定义弹窗事件
      showGlobalModal:function(){
        this.globalModal = {
          rd:Math.random(),
          title:'title',
          content:'content',
          confirmFn:function(){
            console.log('自定义confirmFn'+Math.random());
          },
          cancelFn:function(){
            console.log('自定义cancelFn'+Math.random());
          }
        }
      }
    },
    ready:function(){
      //this.$set('as',new AwesomeSheet({ touchDismiss: false }));
    }
}

</script>
