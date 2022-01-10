<template>
  <div id="listDisplay">
    <table>
      <tr>
        <th v-for="header in headers" :key="header[0]">
          {{ header[0]
          }}<sort-button
            @click="sortBy(header)"
            v-if="!currentSort || currentSort[0] !== header[0]"
          />
        </th>
      </tr>
      <customer-vue
        v-for="customer in sortedList"
        :key="customer.email"
        :customer="customer"
      />
    </table>
  </div>
</template>

<script lang="ts">
import { Customer } from "@/Parser";
import Vue from "vue";
import CustomerVue from "./Customer.vue";
import SortButton from "./SortButton.vue";

export type CustomerSort = (c: Customer) => number;
type Header = [string, CustomerSort];

export default Vue.extend({
  components: { CustomerVue, SortButton },
  props: ["list"],
  computed: {
    sortedList(): Customer[] {
      const vm = this;
      if (vm.currentSort && vm.currentSort.length) {
        return [...(vm.list as Customer[])].sort(vm.currentSort[1]);
      } else {
        return vm.list;
      }
    },
  },
  data() {
    return {
      headers: [
        [
          "First",
          (a: Customer, b: Customer) =>
            a.comparableEmail() > b.comparableEmail() ? 1 : -1,
        ],
        [
          "Last",
          (a: Customer, b: Customer) =>
            a.comparableLastName() > b.comparableLastName() ? 1 : -1,
        ],
        [
          "Email",
          (a: Customer, b: Customer) =>
            a.comparableEmail() > b.comparableEmail() ? 1 : -1,
        ],
        [
          "Vehicle Type",
          (a: Customer, b: Customer) =>
            a.comparableVehicleType() > b.comparableVehicleType() ? 1 : -1,
        ],
        [
          "Vehicle Name",
          (a: Customer, b: Customer) =>
            a.comparableVehicleName() > b.comparableVehicleName() ? 1 : -1,
        ],
        [
          "Vehicle Length",
          (a: Customer, b: Customer) =>
            a.comparableVehicleLength() > b.comparableVehicleLength() ? 1 : -1,
        ],
      ] as Header[],
      currentSort: null as Header | null,
    };
  },
  methods: {
    sortBy(by: Header) {
      this.currentSort = by;
    },
  },
});
</script>

<style>
#listDisplay {
  padding-top: 1rem;
}
</style>