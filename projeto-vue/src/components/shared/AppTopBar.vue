<template>
  <div>
    <v-app-bar
      color="#FE0000"
      shrink-on-scroll
      prominent
      src="https://i.pinimg.com/originals/22/1e/7c/221e7c4d638aa22384135a955c3ea72d.jpg"
      fade-img-on-scroll
      croll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

    <div>
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="rgb(255, 0, 0, 0.1)" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="rgb(255, 0, 0, 0.1)" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>
    </div>
    </v-app-bar>
    
    <div class="app-top-bar"> 
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="red--text text--darken-2"
            >
            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </router-link>   

            <router-link to="/lista-pokemons">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-pokeball</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Pokemons</v-list-item-title>
              </v-list-item>
            </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>
  </div>    
</template>

<script>

export default {
  name: 'AppTopBar',
  data: () => ({
      drawer: false,
      group: null,
  }),
  methods: {
  darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style>
  .title {
    color: #000;
  }

  .app-top-bar a {
    text-decoration: none;
  }
</style>