<template>
  <div>

    <div class="row q-pa-xl bg-relatos  text-white text-center">
      <div class="col-12 text-center text-white">
        <h3 class="text-bold">Relatos de Clientes</h3>
      </div>

      <div class="col-12 col-sm-12 col-md-4 col-lg-4 q-px-md q-mb-xl">

      </div>
    </div>
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


export default defineComponent({
  name: 'RelatosClientes'



})
</script>
    