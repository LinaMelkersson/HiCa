<template>
<div>
    <div class="box1">
      <div class="header">
        <div class="title">
          <h1 style="font-size: 50pt;">Hiking at heart</h1>
        </div>
      </div>
    </div>

    <div class="productpresentation">
        <div class="picturepresentation">
            <div class="twopic">
                <!-- Produktbild 1 stor -->
                <div style="border-radius: 10px; overflow: hidden;">
                    <v-img
                    width='470'
                    src="https://static.outnorth.com/image/upload/b_white,c_lpad,d_no_image_chlzht.png,f_auto,fl_lossy,h_1200,q_auto,w_1200/v1605610835/uploads/live_product_image/file/0/0/273/273227/urberg-roam-65-grey-orange.jpg"
                    ></v-img>
                </div>
                <!-- Produktbild 2 stor -->
                <div style="border-radius: 10px; overflow: hidden;">
                    <v-img
                    width='470'
                    src="https://static.outnorth.com/image/upload/b_white,c_lpad,d_no_image_chlzht.png,f_auto,fl_lossy,h_800,q_auto,w_800/v1605610827/uploads/live_product_image/file/0/0/273/273228/urberg-roam-65-grey-orange.jpg"
                    ></v-img>
                </div>
            </div>
            <div class="imgdisplay">
                <div style="border-radius: 10px; overflow: hidden;">
                <v-img
                width='470'
                src="https://static.outnorth.com/image/upload/b_white,c_lpad,d_no_image_chlzht.png,f_auto,fl_lossy,h_800,q_auto,w_800/v1605610823/uploads/live_product_image/file/0/0/273/273229/urberg-roam-65-grey-orange.jpg"
                ></v-img>
                </div>

                <div style="border-radius: 10px; overflow: hidden;">
                <v-img
                width='470'
                src="https://static.outnorth.com/image/upload/b_white,c_lpad,d_no_image_chlzht.png,f_auto,fl_lossy,h_800,q_auto,w_800/v1605610833/uploads/live_product_image/file/0/0/273/273230/urberg-roam-65-grey-orange.jpg"
                ></v-img>
                </div>

                <div style="border-radius: 10px; overflow: hidden;">
                <v-img
                width='470'
                src="https://static.outnorth.com/image/upload/b_white,c_lpad,d_no_image_chlzht.png,f_auto,fl_lossy,h_800,q_auto,w_800/v1605610825/uploads/live_product_image/file/0/0/427/427309/urberg-roam-65.jpg"
                ></v-img>
                </div>
            </div>
        </div>
        


        <div class="productname">
            <!-- Product namn -->
            <h2>Roam65 Urbergs hiking backpack</h2>
            <div>
                <p>Roam 65 är en lätt vandringsryggsäck från Urberg som passar till korta vandringar och utflykter över helgen. Ryggsäcken är tillverkad av slitstark och vattenavstötande tyg med ett inkluderat regnskydd för de riktigt våta dagarna. EVA Air-Flow ryggplatta och EVA skumfyllda axelremmar gör Roam 65 bekväm hela dagen.</p>
                <li>Material: 420D twill/PU</li>
                <li>Elastiska nätfickor i sidorna</li>
                <li>SBS dragkedja i nylon</li>
                <li>EVA Air-Flow ryggplatta</li>
                <li>EVA skumfyllda axelremmar</li>
                <li>Expanderbar öppning</li>
                <li>Mångfunktionella fickor</li>   
            </div>

            <v-btn
            color="deep-purple lighten-2"
            text
            @click="add"
            style="margin-top:1rem;"
            >
            Add to cart
            </v-btn>
        </div>
    </div>



</div>
</template>

<script>
export default {
    
  }
</script>

<style>

.productpresentation {
    width: 75%;
    margin: auto;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 1rem;
    
}

.picturepresentation {
    display: grid;
    grid-template-rows: 1fr 1fr;
    
}

.twopic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
}
.productname {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    padding-left: 2rem;
    height: 23vw;
}

.imgdisplay {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    width: 80%;
    margin-top: 2rem ;
    margin-left: 5vw;
    margin-bottom: 2rem;

}

</style>