<template>
  <div id="app">
    <CustomerList />
    <div style="margin-top: 1rem">
      <a href="https://github.com/kochrt/wanderlust">Github</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomerList from "./components/CustomerList.vue";

export default Vue.extend({
  name: "App",
  components: {
    CustomerList,
  },
});
</script>

<style>
</style>
