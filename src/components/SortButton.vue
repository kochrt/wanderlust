<template>
  <button @click="$emit('click')">
    Sort
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ['sorted']
});
</script>

<style scoped>
button {
  margin-left: 4px;
  margin-right: 4px;
  font-size: 75%;
  border: none;
}

button:hover {
  background-color: lightgray;
}
</style>