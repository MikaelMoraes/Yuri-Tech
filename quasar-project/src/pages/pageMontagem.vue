<template>
    <div class="bg-color">
        <Processador/>
        <PlacaMaeModel/>
        <memoriaRamModel/>
       <armazenamentoModel/>
       <fonteModel/>
    </div>
</template>
<style lang="scss" scoped>
.bg-color {
    background-color: $bg-color;
}
</style>
<script>
import { defineComponent } from 'vue'
import Processador from 'src/components/montagem/processadorModel.vue'
import PlacaMaeModel from 'src/components/montagem/placaMaeModel.vue'
import armazenamentoModel from 'src/components/montagem/armazenamentoModel.vue'
import memoriaRamModel from 'src/components/montagem/memoriaRamModel.vue'
import fonteModel from 'src/components/montagem/fonteModel.vue'



export default defineComponent({
    name: 'IndexPage',
    components: {
        Processador,
        PlacaMaeModel,
        armazenamentoModel,
        memoriaRamModel,
        fonteModel

    }
})
</script>
  