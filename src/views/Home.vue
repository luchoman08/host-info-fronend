<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ActionTypes } from "../store/ActionTypes";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted: function() {
    this.$store.dispatch(ActionTypes.GET_HOST_INFO, "truora.com");
  }
};
</script>
