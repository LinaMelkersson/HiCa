<template>
  <v-bottom-navigation  v-model="value" dense style="height: 3rem; background-color: rgb(254, 232, 180);">
    <div id="footer">

    <v-btn  value="instagram" style="border-radius: 5px; background: none;">
      <a href="https://www.instagram.com" target="_blank"><v-icon style="color: black;">mdi-instagram</v-icon></a>
    </v-btn>

    <v-btn value="facebook" style="border-radius: 5px; background: none;">
      <a href="https://www.facebook.com" target="_blank"><v-icon style="color: black;">mdi-facebook</v-icon></a>
    </v-btn>

    <v-btn value="twitter" style="border-radius: 5px; background: none;">
      <a href="https://www.twitter.com" target="_blank"><v-icon style="color: black;">mdi-twitter</v-icon></a>
    </v-btn>

    </div>
  </v-bottom-navigation>
</template>

<script>

  export default {

  
  }
</script>

<style>


* {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}



a {
  text-decoration: none;
  color: black !important;
}

a:hover{
  color: grey !important;
}

#footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 25rem;
}

</style>



