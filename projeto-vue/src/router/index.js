import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pokemons from "../views/Pokemons.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lista-pokemons",
    name: "Pokemons",
    component: Pokemons,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
