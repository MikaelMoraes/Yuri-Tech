<template>
    <div>
        <div class="row">
            <div class="col-12 text-center text-white">
                <h3 class="text-bold">Redes Sociais</h3>
            </div>
        </div>
        <div class="row q-pa-xl">
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 q-mb-xl text-center">
                <q-icon name="fa-brands fa-instagram" color="pink" size="4rem" />
                <p class="text-h4 text-bold q-my-lg">Instagram</p>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 q-mb-xl text-center">
                <q-icon name="fa-brands fa-facebook" color="white" size="4rem" />
                <p class="text-h4 text-bold q-my-lg">facebook</p>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4  q-mb-xl text-center">
                <q-icon name="fa-brands fa-whatsapp" color="green" size="4rem" />
                <p class="text-h4 text-bold q-my-lg">Wpp</p>
            </div>
        </div>
        <div class="container">

            <iframe class="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.9000410664207!2d-43.4315284850368!3d-22.76909058508201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9967f86546ecaf%3A0x3ee7b477ed2d6d66!2sYuri%20Tech%20Reparos%20-%20Assist%C3%AAncia%20T%C3%A9cnica%20de%20Computadores%2C%20Notebooks%20e%20Celulares!5e0!3m2!1spt-BR!2sbr!4v1681934713410!5m2!1spt-BR!2sbr"
                style="border:0;" allowfullscreen="true" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

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

.container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
</style>
    
<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'ContatoLocalizacao'



})
</script>
    