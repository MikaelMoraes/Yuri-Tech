<template>
    <section id="ancora">
        <div class="row text-white q-pa-xl text-center bg-servicos">
            <div class="col-12 text-center text-white">
                <h2 class="text-bold">Serviços</h2>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 q-px-md q-mb-xl bounce">
                <a class="no-decoration"
                    href="https://api.whatsapp.com/send?phone=5521970134982&text=Ol%C3%A1,%20desejo%20realizar%20a%20manuten%C3%A7%C3%A3o%20de%20celular%20com%20a%20Yuri%20Tech%20reparos!"
                    target="_blank">
                    <q-icon name="fa-solid fa-mobile" color="white" size="4.5rem" />
                    <p class="text-h4 text-bold q-my-lg">Manutenção de Celulares</p>
                </a>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 q-px-md q-mb-xl bounce">
                <a class="no-decoration"
                    href="https://api.whatsapp.com/send?phone=5521970134982&text=Ol%C3%A1,%20desejo%20realizar%20a%20montagem%20de%20PC%20com%20a%20Yuri%20Tech%20Reparos!"
                    target="_blank">
                    <q-icon name="fa-solid fa-gear" color="white" size="4.5rem" />
                    <p class="text-h4 text-bold q-my-lg">Montagem de Computadores</p>
                </a>

            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 q-px-md q-mb-xl bounce">
                <a class="no-decoration"
                    href="https://api.whatsapp.com/send?phone=5521970134982&text=Ol%C3%A1,%20desejo%20realizar%20a%20manuten%C3%A7%C3%A3o%20de%20PC%20com%20a%20Yuri%20Tech%20Reparos!"
                    target="_blank">
                    <q-icon name="fa-solid fa-desktop" color="white" size="4.5rem" />
                    <p class="text-h4 text-bold q-my-lg">Manutenção de Computadores</p>
                </a>
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

.no-decoration {
    color: $card-border-color ;
    text-decoration: none;
}

.bounce {
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.5s;
}

.bounce:hover {
    transform: scale(1.2);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
</style>
    
<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'ServicosDisponiveis'



})
</script>
    