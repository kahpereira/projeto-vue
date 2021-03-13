<template>
  <v-container>
    <v-img class="img-home mb-4" src="http://2.bp.blogspot.com/-i0eXMGuUl3Q/TyrF2WUCCUI/AAAAAAAAAIs/mHH1HIEOB4s/s640/pokemon+wallpaper.jpg"></v-img>
    <p>Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e publicados pela Nintendo como parte da franquia de mídia Pokémon. Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a principal série de jogos de RPGs, que continuou em cada geração em portáteis da Nintendo.</p>
    <div class="btn text-center">
      <router-link to="/lista-pokemons">
      <v-btn outlined rounded color="#FE0000">
        <v-icon>mdi-pokeball</v-icon>
        <span class="ml-2 text-btn">Pokemons</span>
      </v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .btn a {
    text-decoration: none;
  }
</style>