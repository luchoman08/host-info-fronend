<template>
  <flex-col align-h="center">
    <template v-if="domains.length > 0">
      <flex-row>
        <b-pagination-nav
          class="pagination"
          :link-gen="linkGen"
          :number-of-pages="pagesCount"
          use-router
        ></b-pagination-nav>
      </flex-row>
      <flex-row class="card-deck" align-h="center">
        <Domain
          class="domain"
          v-for="domain in domains"
          v-bind:domain="domain"
          :key="domain.logo"
        ></Domain>
      </flex-row>
      <flex-row>
        <b-pagination-nav
          class="pagination"
          :link-gen="linkGen"
          :number-of-pages="pagesCount"
          use-router
        ></b-pagination-nav>
      </flex-row>
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
  </flex-col>
</template>

<script>
import Domain from "../components/Domain";
import FlexRow from "vue-flex/lib/components/FlexRow";
import { mapState } from "vuex";
import { ActionTypes } from "../store/ActionTypes";
import MutationTypes from "../store/MutationTypes";
import FlexCol from "vue-flex/lib/components/FlexCol";
export default {
  name: "LatestDomainSearched",
  components: {
    FlexCol,
    Domain,
    FlexRow
  },
  computed: {
    ...mapState({
      domains: "latestSearchedDomains",
      pagesCount: "pagesCount"
    })
  },
  methods: {
    linkGen(page) {
      return { name: "lastSearched", params: { page: page } };
    }
  },
  beforeRouteUpdate(to, from, next) {
    let currentPage = to.params.page;
    if (!currentPage || currentPage === "") {
      currentPage = 1;
    }
    this.$store.commit(MutationTypes.SET_CURRENT_PAGE, currentPage);
    this.$store.dispatch(ActionTypes.GET_LATEST_SEARCHED_DOMAINS);
    next();
  },
  mounted() {
    this.$store.commit(MutationTypes.SET_CURRENT_PAGE, 1);
    this.$store.dispatch(ActionTypes.GET_LATEST_SEARCHED_DOMAINS);
  }
};
</script>

<style scoped>
.no-domains-results {
  width: 100%;
  margin-top: 8em;
}
.pagination {
  margin-top: 12px;
}
.domain {
  margin-top: 15px;
}
</style>
