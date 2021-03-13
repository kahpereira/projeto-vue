<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Pokédex:</h2>
    <PokemonLista :pokemons ="pokemonsLista"/>
  </v-container>
</template>

<script>
import PokemonLista from '../components/PokemonLista'

export default {
  name: 'Pokemons',
  components: {
    PokemonLista
  },
  data() {
    return {
      pokemonsLista: []
    }
  },
  created: function(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response => response.json())
    .then(json => {
      this.pokemonsLista = json;
    })
  }
}
</script>

<style>
</style>