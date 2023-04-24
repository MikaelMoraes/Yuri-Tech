<template>
  <section id="InicioTopo">
    <q-parallax class="border-top" src="~assets/fundo.png">
      <div class="row reverse items-center q-px-xl q-py-xl ">
        <div class="col-12 col-md-4 text-center ">
          <q-img src="~assets/magalu.png" style="width: 250px; height: 250px;"></q-img>
        </div>
        <div class=" col-12 col-md-8 text-white text-center  orientation-landscape ">
          <h3 class="text-weight-bold">Veja tambem nossa loja no magalu, apontando a camera ou
            <a class="text-link" href="#" target="_blank">clicando aqui!!!</a>
          </h3>
        </div>
        <div class=" col-12 col-md-8 text-white text-center orientation-portrait ">
          <h5 class="text-weight-bold">Veja tambem nossa loja no magalu, apontando a camera ou
            <a class="text-link" href="#" target="_blank">clicando aqui!!!</a>
          </h5>
        </div>
      </div>
    </q-parallax>
    <div class="row justify-center q-pa-xl border-top orientation-portrait">
      <div class="col">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <q-img src="~assets/pc-gamer.png"> </q-img>
            </div>
            <div class=" flip-card-back">
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row items-center q-pa-xl orientation-portrait ">
      <div class="col">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <q-img class="q-mt-xl" src="~assets/laptop.png"></q-img>
            </div>
            <div class=" flip-card-back">
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" row items-center q-pa-xl border-top orientation-landscape justify-center">
      <div class=" col-4 card ">
        <q-img src="~assets/pc-gamer.png">
        </q-img>
      </div>
      <div class="col-6  ">
        <q-card class="my-card text-black card-text-border q-ma-lg  ">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley
              of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software
              like Aldus PageMaker including versions of Lorem Ipsum
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class=" row items-center q-pa-xl orientation-landscape justify-center ">
      <div class="col-6 ">
        <q-card class="my-card text-black card-text-border q-ma-lg">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley
              of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software
              like Aldus PageMaker including versions of Lorem Ipsum</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class=" col-4 card q-mb-lg ">
        <q-img src="~assets/laptop.png">
        </q-img>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  background-color: $card-color;
  border: solid 5px $card-border-color;
  border-radius: 50px;
}

.text-link {
  color: $warning;
  text-decoration: none;
}

.text-link:hover {
  color: $accent;
}

.border-top {
  border-top: solid 5px $borda-top;
}

.card-text-border {
  border-radius: 15px;
}

//Card com Flipper
.flip-card {

  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: $card-color;
  border: solid 5px $card-border-color;
  border-radius: 50px;

}

.flip-card-back {
  background-color: $card-color;
  border: solid 5px $card-border-color;
  border-radius: 50px;
  color: white;
  transform: rotateY(180deg);
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
  