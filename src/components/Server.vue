<template>
  <b-card
    border-variant="success"
    header="EndPoint info"
    header-bg-variant="success"
    header-text-variant="white"
    tag="article"
    style="max-width: 30rem;"
  >
    <b-card-header>
      <span>{{ server.address }}</span>
    </b-card-header>
    <div>Owner: {{ server.owner ? server.owner : "No owner found" }}</div>
    <div>SSL grade: {{ server.sslGrade }}</div>
    <b-card-footer>
      <span
        >Country:
        {{ server.country ? server.country : "No contry found" }}</span
      >
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: "Server",
  props: {
    server: Object
  }
};
</script>

<style scoped></style>
