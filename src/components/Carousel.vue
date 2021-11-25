<template>
<div>
      <div class="box1">
      <div class="header">
        <div class="title">
          <h1 style="font-size: 50pt;">Hiking at heart</h1>
        </div>
      </div>
    </div>

    <v-carousel     
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
    style="margin-top: 20vw;">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="ease-in-out"
      transition="ease-in-out"
    ></v-carousel-item>
  </v-carousel>

</div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.hdqwalls.com/download/swedish-west-coast-3840x2400.jpg',
          },
          {
            src: 'https://images.hdqwalls.com/wallpapers/aurora-northern-lights-4k-hh.jpg',
          },
          {
            src: 'https://i.pinimg.com/originals/db/41/ba/db41ba11ee4d66c03e3dbf6e2ae0a6cd.jpg',
          },
          {
            src: 'https://cdn.wallpapersafari.com/35/4/j5iGCD.jpg',
          },
        ],
      }
    },
  }
</script>

<style>


</style>