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

  </div>
</template>

<script>
module.exports = {
    data: function() {
      return {
        authenticating: false
      };
    }
}

</script>
