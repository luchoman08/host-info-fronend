<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="navbar-brand" href="#">Host Info &#x1F6C8;</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <domain-search></domain-search>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import DomainSearch from "../DomainSearch";
export default {
  name: "Navbar",
  components: { DomainSearch }
};
</script>

<style scoped>
  .navbar-brand {
    margin-left: 20px;
  }
</style>
