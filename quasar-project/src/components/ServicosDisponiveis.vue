<template>
    <section id="ancora">
        <div class="row text-white q-pa-xl text-center bg-servicos">
            <div class="col-12 text-center text-white">
                <h2 class="text-bold">Serviços</h2>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 q-px-md q-mb-xl">
                <q-icon name="fa-solid fa-mobile" color="white" size="4.5rem" />
                <p class="text-h4 text-bold q-my-lg">Manutenção de Celulares</p>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 q-px-md q-mb-xl">
                <q-icon name="fa-solid fa-gear" color="white" size="4.5rem" />
                <p class="text-h4 text-bold q-my-lg">Montagem de Computadores</p>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 q-px-md q-mb-xl">
                <q-icon name="fa-solid fa-desktop" color="white" size="4.5rem" />
                <p class="text-h4 text-bold q-my-lg">Manutenção de Computadores</p>
            </div>

        </div>
    </section>
</template>
<style lang="scss" scoped>
.bg-servicos {
    background-color: $card-color;
    border-bottom: solid 10px $card-border-color;
    border-top: solid 10px $card-border-color;
    transform: skewY(-3deg);
}
</style>
    
<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'ServicosDisponiveis'



})
</script>
    