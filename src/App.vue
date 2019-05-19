<template>
  <div id="app">
    <navbar></navbar>
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link :to="{ name: 'lastSearched', params: { page: 1 } }"
        >Last Searched</router-link
      >&nbsp;|
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-view {
  padding: 25px;
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
<script>
import Navbar from "./components/layout/Navbar";
export default {
  components: { Navbar }
};
</script>
