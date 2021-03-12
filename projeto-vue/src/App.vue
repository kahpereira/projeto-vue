<template>
  <v-app>
    <v-app-bar
      absolute
      color="#E53935"
      dark
      shrink-on-scroll
      prominent
      src="./assets/images/pokemon.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(183,28,28,.7), rgba(198,40,40,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Pokédex</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-moon-waxing-crescent</v-icon>
      </v-btn> -->
       <div>
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="rgb(255, 0, 0, 0.1)" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Ligth Mode On</span>
      </v-tooltip>

      <v-tooltip v-else>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="rgb(255, 0, 0, 0.1)" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>
    </div>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;"></v-container>
    </v-sheet>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
  darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
