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
    padding-top: 35%;
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
    name: 'ContatoSocial'



})
</script>
    