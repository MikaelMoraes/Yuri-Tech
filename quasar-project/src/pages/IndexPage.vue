<template>
  <q-page class=" bg-color">
    <InicioTopo />
    <ServicosDisponiveis />
    <RelatosClientes />
    <ContatoSocial />
    <LocalizacaoGoogle />
    <VoltaTopo />
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
import ContatoSocial from 'src/components/ContatoSocial.vue'
import LocalizacaoGoogle from 'src/components/localizacaoGoogle.vue'
import VoltaTopo from 'src/components/VoltaTopo.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    InicioTopo,
    ServicosDisponiveis,
    RelatosClientes,
    ContatoSocial,
    LocalizacaoGoogle,
    VoltaTopo
  }
})
</script>
