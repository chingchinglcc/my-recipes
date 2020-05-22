<template>
  <div id="app">
    <div id="nav" class="flex">
      <router-link to="/" class="mr-6">Home</router-link>
      <router-link to="/categories" class="mr-6">Categories</router-link>
      <router-link to="/about" class="mr-6">About</router-link>
      <AdminLogin />
    </div>
    <router-view/>
  </div>
</template>

<script>
import AdminLogin from './components/AdminPortal/AdminLogin.vue';

export default {
  components: { AdminLogin },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
