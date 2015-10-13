<style>

.view {
  transition: all .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
  transform: translate3d(0, 5px, 0);
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

.app > a{
  display:block;
}
</style>

<template>
  <div class="app">
    <p v-if="authenticating" style="color:red">Authenticating...</p>
    <h1>App Header</h1>
    <a v-link="{ path: '/my_views' }">my-views</a>
    <a v-link="{ name: 'views_deital',params: {viewsId:123} }">my-views --> viewId:123</a>
    <a v-link="{ path: '/about' }">about</a>
    <a v-link="{ path: '/forbidden' }">forbidden</a>
    <a v-link="{ path: '/nofound' }">404</a>
    <a v-link="{ path: '/nofound' }">弹窗</a>
    <!-- <router-view class="view" transition="fade" transition-mode="out-in"></router-view> -->
    <router-view class="view" transition="fade" transition-mode="out-in"></router-view>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal :show.sync="showModal"> <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->
      <!--
        you can use custom content here to overwrite
        default content
      -->

      <h3 slot="body">自定义的头部</h3>
      <h3 slot="header">内容</h3>
    </modal>
  </div>
</template>

<script>
module.exports = {
    data: function() {
      return {
        showLogin: false,
        showAside: false,
        showModal:false,
        authenticating: false
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
      });
      this.$on('cancelCallback',function(child){
        console.log(child);
        console.log('cancelCallback');
      });
    }
}

</script>
