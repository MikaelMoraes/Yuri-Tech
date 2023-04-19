<template>
  <div class="row reverse items-center q-px-xl bg-dark">
      <div class="col-12 col-md-4 text-center ">
        <q-img  src="~assets/magalu.png" style="width: 250px; height: 250px;"></q-img>
      </div>
      <div class=" col-12 col-md-8 text-white text-center  ">
        <h4 class="text-weight-bold">Veja tambem nossa loja no magalu, apontando  a camera ou 
          <a href="#" target="_blank">clicando aqui!!!</a>
        </h4>
      </div>
      </div>
    <div class=" row items-center q-pa-xl">
      <div class=" col-12 col-sm-6 col-md-4 col-lg-4 card ">
        <q-img src="~assets/pc-gamer.png">
        </q-img>
      </div>
      <div class="col-12  col-sm-6 col-md-8 col-lg-8  orientation-landscape">
        <q-card class="my-card text-black card-text-border q-ma-lg  ">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class=" row items-center q-pa-xl ">
      <div class="col-12  col-sm-6 col-md-8 col-lg-8 orientation-landscape">
        <q-card class="my-card text-black card-text-border q-ma-lg">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class=" col-12 col-sm-6 col-md-4 col-lg-4 card q-mb-lg ">
        <q-img src="~assets/laptop.png">
        </q-img>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: $card-color;
  border: solid 10px $card-border-color;
  border-radius: 50px;
}
.card-text-border {
  border-radius: 15px;
}

</style>
  
<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'InicioTopo',
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }


})
</script>
  