<template>
  <tr>
    <td>{{ customer.firstName }}</td>
    <td>{{ customer.lastName }}</td>
    <td>{{ customer.email }} </td>
    <td>{{ customer.vehicleType }}</td>
    <td>{{ customer.vehicleName }}</td>
    <td>{{ customer.vehicleLength }}</td>
  </tr>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["customer"],
});
</script>

<style>
</style>