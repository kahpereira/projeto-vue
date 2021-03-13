<template>
  <v-app>
    <AppTopBar/>
    <v-main>
        <router-view/>
    </v-main>
    <Footer/> 
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar'
import Footer from './components/shared/Footer'

export default {
  name: 'App',
  components: {
    AppTopBar,
    Footer
  }
};
</script>

<style>

</style>
