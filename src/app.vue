<style>

.view {
  transition: all .5s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
.v-link-active {
  color: red;
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
</style>

<template>
  <div>
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <h1>App Header</h1>
    <a v-link="{ path: '/my-component' }">my-commpent</a>
    <a v-link="{ path: '/about' }">about</a>
    <a v-link="{ path: '/forbidden' }">forbidden</a>
    <a v-link="{ path: '/nofound' }">404</a>
    <router-view class="view" transition="test" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
module.exports = {
    data: function data() {
      return {
        authenticating: false
      };
    }
}

</script>
