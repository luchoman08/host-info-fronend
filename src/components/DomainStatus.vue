<template>
  <b-alert
    show
    :title="domainStatus ? 'Host is alive!' : 'Host is down'"
    :variant="domainStatus ? 'success' : 'danger'"
  >
    <template v-if="domainStatus">
      &#128077;
    </template>
    <template v-if="!domainStatus">
      &#x1F44E;
    </template>
  </b-alert>
</template>

<script>
export default {
  name: "DomainStatus",
  props: {
    domainStatus: Boolean
  }
};
</script>

<style scoped></style>
