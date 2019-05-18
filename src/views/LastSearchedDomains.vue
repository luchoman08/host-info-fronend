<template>
  <div class="row">
    <template v-if="domains.length > 0">
      <Domain
        class="col-lg-4"
        v-for="domain in domains"
        v-bind:domain="domain"
        :key="domain.logo"
      ></Domain>
    </template>
    <flex-row
      v-else
      class="no-domains-results"
      align-v="center"
      align-h="center"
      grow
      wrap
    >
      <h4>No records found, Be the first! Go and search</h4>
    </flex-row>
  </div>
</template>

<script>
import Domain from "../components/Domain";
import FlexRow from "vue-flex/lib/components/FlexRow";
import { mapState } from "vuex";
import { ActionTypes } from "../store/ActionTypes";
export default {
  name: "LatestDomainSearched",
  components: {
    Domain,
    FlexRow
  },
  computed: {
    ...mapState({
      domains: "latestSearchedDomains"
    })
  },
  mounted() {
    this.$store.dispatch(ActionTypes.GET_LATEST_SEARCHED_DOMAINS);
  }
};
</script>

<style scoped>
.no-domains-results {
  width: 100%;
  margin-top: 8em;
}
</style>
