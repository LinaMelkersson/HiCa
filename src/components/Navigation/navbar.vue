<template>
<div>
      <v-app-bar dense short app class="toppnav" style="background-color: rgb(255, 243, 215);  box-shadow: none;">

      <!-- LOGGA OCH FÖRETAGSNAMN -->
      
      <!-- <router-link to='/'>
      <div style="margin-top: 6rem;">
          <v-img
          max-width="80"
          src="https://th.bing.com/th/id/R.f386294c9da62e26e33acac826f463ab?rik=RAPug3lFOvlMUg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f0%2ff%2f8%2fb%2f11949846021376550813backpacker_ganson.svg.hi.png&ehk=VF7oVKJfhpaxXLxafgUf32WwOHSPnEdSrqt0F7ynYsw%3d&risl=&pid=ImgRaw&r=0"
        ></v-img>
      </div>

      </router-link>
      <router-link to="/"> <h1>HiCa</h1> </router-link> -->

      <v-spacer></v-spacer>

      

      <div class="navbar">
        <router-link to="/"><h2>Home</h2></router-link>
        <router-link to='/about'><h2>About</h2></router-link>
        <router-link to='/Carousel'><h2>Hiking</h2></router-link>
      </div>

    <v-menu 
    offset-y 
    :close-on-content-click="closeOnContentClick"> 
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          style="margin-right:2rem;"
        >
          <v-icon style="color: grey;">mdi-magnify</v-icon>
        </v-btn>
      </template> 
        <v-text-field
            placeholder="Search"
            filled
            rounded
            dense
            background-color="#ffff">
      </v-text-field>
    </v-menu> 

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          style="margin-right:4rem;"
        >
          <v-icon style="color: grey;">mdi-cart</v-icon>
        </v-btn>
      </template>
      <v-list style="border: 1.5px solid black; border-radius: 10px;">
        <cart></cart>
          <v-list-action style="display: flex; justify-content: center; margin-top: 1rem;">
              <v-btn
              text
              ><router-link to="/Checkout"><h3 style="color: purple;">Checkout</h3></router-link>
              </v-btn>
        </v-list-action>

      </v-list>
    </v-menu>
      
    </v-app-bar>
</div>

</template>

<script>
import cart from '../cart.vue'

// var defaultText = "Search"; 
// var searchBox = document.getElementById("search"); 
// searchBox.value = defaultText; 
// searchBox.onfocus = function() { 
//   if (this.value == defaultText) {this.value = ''; } }
// searchBox.onblur = function() { 
//   if (this.value == "") {this.value = defaultText; } }
  
  export default {
    components: {
      cart
    },
      data: () => ({
      closeOnContentClick: false,

    }),

  
  }
</script>

<style>



* {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.toppnav {
    width: 100%; 
    margin: auto; 
}

.v-menu__content {
  box-shadow: none !important;
}



a {
  text-decoration: none;
  color: gray !important;
}

a:hover{
  color: rgb(143, 93, 143) !important;
}

.navbar {
  padding-right: 3rem;
  display: grid;
  margin-left: 8rem;
  margin-right: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  

}

</style>