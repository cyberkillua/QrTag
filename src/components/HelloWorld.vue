<template>
  <v-container>
    <div class="mt-14 mx-6">
      <v-text-field v-model="code" label="QR code" outlined></v-text-field>

      <div class="btn mt-14 mx-auto" v-if="alltag.length < 10">
        <v-btn
          v-on:click="scancode(code)"
          depressed
          color="primary"
          x-large
          class="mx-auto"
        >
          Submit
        </v-btn>
      </div>
      <div class="btn mt-14 mx-auto headline" v-else>Limit reached</div>
      <v-card class="mx-auto my-12" max-width="374" elevation="2" shaped>
        <v-img v-bind:src="tag" alt="qr code"></v-img>
        <v-card-text>{{ tag }}</v-card-text>
        <v-divider class="mx-4"></v-divider>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      code: "",
      // tag: "",
    };
  },
  computed: {
    tag() {
      return this.$store.getters.getCurrentTag;
    },
    alltag() {
      return this.$store.getters.getAllTag;
    },
  },
  // mounted() {
  //   this.tag =
  // },
  methods: {
    scancode: function (code) {
      this.$store.dispatch("scancode", code);
      console.log(code);
      // this.$store.dispatch("scancode");
    },
  },
};
</script>
<style scoped>
.btn {
  width: 50%;
  display: flex;
  justify-content: center;
}
.picture {
  /* width: 60%; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
</style>
