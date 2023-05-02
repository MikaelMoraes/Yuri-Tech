<template>
  <q-layout view="lhh Lpr lff">
    <q-header>
      <q-toolbar class="bg-menu " id="top">
        <q-toolbar-title class="text-center">
          <img class="q-ma-none" src="~assets/LogoVetor.png" style="width: 200px; height: 200px">
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs v-model="tab" class="bg-menu orientation-landscape">
        <q-tab name="servicos" label="Serviços" @click="scroolToServicos" />
        <q-tab name="relatosDeClientes" label="Relatos de Clientes" @click="scroolToRelatos" />
        <q-tab name="contatos" label="Redes Sociais" @click="scroolToContato" />
        <q-tab name="localizacao" label="Localização" @click="scroolToLocalizacao" />
      </q-tabs>
      <q-tabs v-model="tab" class="bg-menu orientation-portrait">
        <q-tab name="servicos" label="Serviços" @click="scroolToServicosPortrait" />
        <q-tab name="relatosDeClientes" label="Relatos" @click="scroolToRelatosPortrait" />
        <q-tab name="contatos" label="Redes" @click="scroolToContatoPortrait" />
        <q-tab name="localizacao" label="Localização" @click="scroolToLocalizacaoPortrait" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-menu">

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
  name: 'MainLayout',
  data() {
    return {
      showButton: false
    }
  },
  methods: {
    handleScroll() {
      this.showButton = window.pageYOffset > 100
    },
    scroolToInicio() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scroolToServicos() {
      window.scrollTo({
        top: 1600,
        behavior: 'smooth'
      })
    },
    scroolToRelatos() {
      window.scrollTo({
        top: 2150,
        behavior: 'smooth'
      })
    },
    scroolToContato() {
      window.scrollTo({
        top: 2650,
        behavior: 'smooth'
      })
    },
    scroolToLocalizacao() {
      window.scrollTo({
        top: 3150,
        behavior: 'smooth'
      })
    },
    scroolToInicioPortrait() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scroolToServicosPortrait() {
      window.scrollTo({
        top: 1600,
        behavior: 'smooth'
      })
    },
    scroolToRelatosPortrait() {
      window.scrollTo({
        top: 2550,
        behavior: 'smooth'
      })
    },
    scroolToContatoPortrait() {
      window.scrollTo({
        top: 3100,
        behavior: 'smooth'
      })
    },
    scroolToLocalizacaoPortrait() {
      window.scrollTo({
        top: 4050,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
})
</script>
