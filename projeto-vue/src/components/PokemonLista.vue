<template v-slot:default>
  <div class="app">
    <div v-for="(poke, index) in pokemons" :key="index">
      <h1>{{ index + 1 }} Poke</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonLista',
  methods: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>