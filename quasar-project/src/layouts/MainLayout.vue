<template>
  <q-layout view="lhh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-menu " id="top">
        <q-toolbar-title class="text-center">
          <img class="q-ma-none" src="~assets/LogoVetor.png" style="width: 200px; height: 200px">
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs v-model="tab" class="bg-menu">
        <q-tab name="inicio" label="Inicio" />
        <q-tab name="servicos" label="Serviços" />
        <q-tab name="relatosDeClientes" label="Relatos de Clientes" />
        <q-tab name="contatos" label="Contatos" />
        <q-tab name="localizacao" label="Localização" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-menu">

      <div class="row items-center q-mt-sm">
        <div class="col-12 col-md-4  text-h5 text-center">
          <p> &copy;2023 Yuri Tech Reparos</p>
        </div>
        <div class="col-12 col-md-4  text-center">
          <img src="~assets/LogoVetor.png" style="width: 150px; height: 150px">
        </div>
        <div class="col-12 col-md-4  text-h5 text-center">
          <p> Desenvolvido por <a href="https://portifolio-mikael.vercel.app/" class="text-link" target="_blank">Mikael
              Moraes</a></p>
        </div>
      </div>
      <div class="row bg-cnpj">
        <div class="col text-h5 text-center">
          <p>CNPJ: 40.890.502/0001-50</p>
        </div>
      </div>


    </q-footer>
  </q-layout>
</template>
<style lang="scss" scoped>
.bg-menu {
  background-color: $menuColor;
}

.bg-cnpj {
  background-color: $card-color;
}

.text-link {
  color: $dark;
  text-decoration: none;
}

.text-link:hover {
  color: black;
}
</style>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MainLayout'
})
</script>
