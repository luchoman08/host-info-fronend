<template>
  <flex-row align-h="center">
    <b-nav-form v-on:submit.prevent="findHostInfo()">
      <flex-row align-h="center">
        <b-form-input
          size="sm"
          class="mr-sm-2"
          :state="validInput"
          placeholder="Search"
          v-b-tooltip
          :title="validInput ? '' : 'Write a valid URL'"
          v-model="host"
        ></b-form-input>
        <b-button
          size="sm"
          @click="findHostInfo()"
          class="my-2 my-sm-0"
          type="button"
          >Search</b-button
        >
      </flex-row>
    </b-nav-form>
  </flex-row>
</template>

<script>
import { ActionTypes } from "../store/ActionTypes";
import { validURL } from "../common/util";
import FlexRow from "vue-flex/lib/components/FlexRow";
export default {
  name: "DomainSearch",
  components: { FlexRow },
  data: function() {
    return {
      host: ""
    };
  },
  computed: {
    validInput() {
      if (this.host === "") return true;
      return validURL(this.host);
    }
  },
  methods: {
    findHostInfo() {
      if (!this.validInput || this.host === "") {
        return;
      }
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
        .finally(() => loader.hide());
    }
  }
};
</script>

<style scoped></style>
