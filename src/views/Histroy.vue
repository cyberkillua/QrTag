<template>
  <v-container>
    <h2 class="text-center my-12">History of code generated</h2>
    <v-card
      class="mx-auto my-12"
      max-width="374"
      elevation="2"
      shaped
      v-for="(tag, index) in alltag"
      :key="index"
    >
      <v-img v-bind:src="tag"></v-img>
      <v-card-text>{{ tag }}</v-card-text>
      <v-divider class="mx-4"></v-divider>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    alltag() {
      return this.$store.getters.getAllTag;
    },
  },
};
</script>

<style></style>
