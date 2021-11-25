<template>
<v-app style="background-color: rgb(255, 243, 215);">
  <Nav></Nav>

  <v-main>
    <router-view/>
  </v-main>

  <Footer></Footer>

</v-app>
</template>

<script>
import Footer from './components/Navigation/footer.vue'
import Nav from './components/Navigation/navbar.vue'

  export default {

    components: {
      Footer,
      Nav
    },
    
    name: 'App',
  
  }
</script>

<style>


* {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}


</style>



