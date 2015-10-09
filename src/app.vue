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

</style>

<template>
  <div>
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <h1>App Header</h1>
    <a v-link="{ path: '/my-component' }">my-commpent</a>
    <a v-link="{ path: '/about' }">about</a>
    <a v-link="{ path: '/forbidden' }">forbidden</a>
    <router-view class="view" transition="test" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
module.exports = function(){
  return {
    data: function data() {
      return {
        authenticating: false
      };
    }
  }
}
</script>
