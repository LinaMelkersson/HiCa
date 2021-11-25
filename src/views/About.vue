<template>
<div>

  <div class="maingrid">
    <div class="box1">
      <div class="header">
        <div class="title">
          <h1 style="font-size: 50pt;">Hiking at heart</h1>
        </div>
      </div>

      <div class="box2">
        <div class="container">
          <v-img
          height='445'
          src='https://wallpapercave.com/wp/wp1903455.jpg'
          >
          </v-img>
        </div>

        <div class="container">
          <div class="om">
            <h1>Our Goals</h1>
            <div>
            <p>Easy acces to hiking gear</p>
            <p>No problem finding the right trail for you</p>
            <p>Hiking availeble to everyone</p>
            </div>
          </div>
        </div>

        <div class="container">
          <v-img
          height='445'
          src='https://www.baxterstateparkauthority.com/wp-content/uploads/2021/05/How-To-Use-Hiking-Poles-And-Trekking-Poles-1.jpg'
          >
          </v-img>
        </div>

        <div class="container">
          <div class="om">
            <h1>Our Values</h1>
            <div>
            <p>Equality</p>
            <p>Stability</p>
            <p>Trust</p>
            </div>
          </div>
        </div>

        <div class="container">
          <v-img
          height='445'
          src='https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=landscape-mountains-nature-1271619.jpg&fm=jpg'>
          </v-img>
        </div>

        <div class="container">
            <div class="om">
            <h1>Work Procedures</h1>
            <div>
            <p>Efficient</p>
            <p>Quality</p>
            <p>Adapteble</p>
            </div>
          </div>
        </div>

        <div class="container">
          <v-img
          height='445'
          src='https://th.bing.com/th/id/R.282e4d59ff246df0710b52dab8d7b898?rik=ieYgP4Hu8HGIpA&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2019%2f07%2fHiking-Trip-High-Quality-Wallpaper-1024x768.jpg&ehk=Pu94T5QP2mzYZumVgHQ76tJ0fmKn9CBGxeOpFdQUAf0%3d&risl=&pid=ImgRaw&r=0'>
          </v-img>
        </div>

        <div class="container">
          <div class="om">
            <h1>Supported Trails</h1>
            <div>
            <p>Easy to find</p>
            <p>For all levels of experience</p>
            <a href="https://www.alltrails.com/" target="_blank"><p style="color:purple;">All Trails</p></a>
            </div>
          </div>
        </div>

        <div class="container">
          <v-img
          height='500'
          src='https://i.ytimg.com/vi/1ziE91tiDuU/maxresdefault.jpg'>
          </v-img>
        </div>

      </div>
    </div>
  </div>


 
  </div> 
</template>

<script>
export default {

}
</script>

<style>

.om {
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-content: center;
  text-align: center;
}



.box2 {
  width: 72%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  padding-bottom: 1rem;
}

.container {
  width: 23vw;
  height: 23vw;
  margin-top: 1rem;
  border-radius: 15px;
  padding: 0;
  overflow: hidden;
  display: grid;
  justify-content: center;
  align-content: center;
}



</style>


