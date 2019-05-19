<template>
  <flex-row align-h="center" v-if="domain">
    <b-card
      border-variant="primary"
      header="Domain info"
      header-bg-variant="primary"
      header-text-variant="white"
      img-top
      tag="article"
      style="max-width: 30rem;"

    >
      <b-card-header>
        <p>
          <img
            :src="domain.logo !== '' ? domain.logo : '@/assets/server-icon.png'"
            :alt="domain.title"
            class="domain-logo"
          />
          {{ domain.title }}
        </p>
      </b-card-header>
      <div>SSL grade: {{ domain.sslGrade }}</div>
      <div>Servers changed: {{ domain.serversChanged ? "YES" : "NO" }}</div>
      <div v-if="domain.serversChanged">
        Previous SSL grade: {{ domain.previousSslGrade }}
      </div>
      <div>Host name: {{ domain.hostName }}</div>
      <b-card-footer>
        <domain-status v-bind:domainStatus="!domain.isDown"></domain-status>
      </b-card-footer>
    </b-card>
  </flex-row>
</template>

<script>
import DomainStatus from "./DomainStatus";
import FlexRow from "vue-flex/lib/components/FlexRow";
let component = {
  name: "Domain",
  components: { DomainStatus, FlexRow },
  props: {
    domain: Object
  }
};
export default component;
</script>

<style>
.domain-logo {
  max-width: 30px;
  max-height: 30px;
  margin-right: 10px;
  vertical-align: bottom;
}
</style>
