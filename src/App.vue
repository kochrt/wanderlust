<template>
  <div id="app">
    <CustomerList />
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
