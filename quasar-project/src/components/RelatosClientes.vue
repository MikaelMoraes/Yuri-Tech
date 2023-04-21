<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col text-center text-white">
        <h4 class="text-bold">Relatos Dos Clientes</h4>
      </div>

    </div>
    <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="white"
      navigation padding arrows height="300px" class="bg-primary text-white shadow-1 rounded-borders">
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">

        <q-card class="my-card" flat bordered>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>
                Subhead
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>

  </div>
</template>
  
<style lang="scss" scoped>
.bg-relatos {
  background-color: $card-color;
  border-bottom: solid 10px $card-border-color;
  border-top: solid 10px $card-border-color;

}

.card-text-border {
  border-radius: 15px;
}
</style>
    
<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'


export default defineComponent({
  name: 'RelatosClientes',
  setup() {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }



})
</script>
    