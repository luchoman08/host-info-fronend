<template>
  <div class="home row">
    <template v-if="domain">
      <Domain v-bind:domain="domain" class="col-lg-5"></Domain>
      <div class="col-lg-6">
        <b-card-group deck>
          <template v-for="server in servers">
            <server v-bind:server="server" v-bind:key="server.address"></server>
          </template>
        </b-card-group>
      </div>
    </template>
    <flex-row
      v-else
      class="no-domain-loaded"
      align-v="center"
      align-h="center"
      grow
      wrap
    >
      <h4>Search a domain name at top of the page</h4>
    </flex-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Domain from "../components/Domain";
import { mapState } from "vuex";
import Server from "../components/Server";
import FlexRow from "vue-flex/lib/components/FlexRow";
export default {
  name: "home",
  components: {
    FlexRow,
    Server,
    Domain
  },
  computed: {
    ...mapState(["domain", "servers"])
  }
};
</script>
<style>
.no-domain-loaded {
  width: 100%;
  margin-top: 8em;
}
</style>
