<template>
  <v-app>
    <v-app-bar app color="" dark>
      <div class="d-flex align-center"></div>
      <v-toolbar-title class="text-uppercase grey--text pl-6">
        <router-link to="/" class="grey--text">
          <span class="font-weight-light">qr</span>
          <span class="font-weight-bold">code</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/history">
        <v-btn text>
          <span class="mr-2">History</span>
          <v-icon color="white">mdi-comma</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
