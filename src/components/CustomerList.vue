<template>
  <div>
    <p>Upload Customer List</p>
    <input type="file" name="list" @change="inputFile" />
    <ListDisplay :list="list" />
  </div>
</template>

<script lang="ts">
import parse, { Customer } from "@/Parser";
import Vue from "vue";
import ListDisplay from "./ListDisplay.vue";

export default Vue.extend({
  data() {
    return {
      list: [] as Customer[],
    };
  },
  methods: {
    async inputFile(event: InputEvent) {
      const files = (event.target as HTMLInputElement).files;
      if (files && files[0]) {
        this.list = await parse(files[0]);
      }
    },
  },
  components: { ListDisplay },
});
</script>

<style>
</style>