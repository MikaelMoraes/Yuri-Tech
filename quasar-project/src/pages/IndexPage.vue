<template>
  <q-page class=" bg-color">
    <InicioTopo/>
    <ServicosDisponiveis/>
    <RelatosClientes/>
    <ContatoLocalizacao/>
  </q-page>
</template>
<style lang="scss" scoped>
.bg-color {
  background-color: $bg-color;
}
</style>
<script>
import { defineComponent } from 'vue'
import InicioTopo from 'components/InicioTopo.vue'
import ServicosDisponiveis from 'components/ServicosDisponiveis.vue'
import RelatosClientes from 'src/components/RelatosClientes.vue'
import ContatoLocalizacao from 'src/components/ContatoLocalizacao.vue'

export default defineComponent({
  name: 'IndexPage',
  components:{
    InicioTopo,
    ServicosDisponiveis,
    RelatosClientes,
    ContatoLocalizacao
  }
})
</script>
