<template>
  <b-nav-form v-on:submit.prevent="findHostInfo()">
    <b-form-input
      size="sm"
      class="mr-sm-2"
      placeholder="Search"
      v-model="host"
    ></b-form-input>
    <b-button
      size="sm"
      @click="findHostInfo()"
      class="my-2 my-sm-0"
      type="button"
      >Search</b-button
    >
  </b-nav-form>
</template>

<script>
import { ActionTypes } from "../store/ActionTypes";
export default {
  name: "DomainSearch",
  data: function() {
    return {
      host: ""
    };
  },
  methods: {
    findHostInfo() {
      let loader = this.$loading.show();
      this.$store
        .dispatch(ActionTypes.GET_HOST_INFO, this.host)
        .then(() => {
          this.$router.push({ path: "/" });
        })
        .catch(() => {
          console.log("catch in find host");
          this.$bvToast.toast(`The domain info can not be displayed.`, {
            title: "Domain not found",
            variant: "warning",
            autoHideDelay: 4000
          });
        })
          .finally(()=> loader.hide())
    }
  }
};
</script>

<style scoped></style>
