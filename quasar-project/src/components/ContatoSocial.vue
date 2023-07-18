<template>
    <section id="ContatoSocial">
        <div class="bg-dark border-tb ">
            <div class="row">
                <div class="col-12 text-center text-white">
                    <h3 class="text-bold">Redes Sociais</h3>
                </div>
            </div>
            <div class="row q-pa-xl">
                <div class="col-12 col-sm-3 col-md-3 col-lg-3 q-mb-xl text-center bounce">
                    <a href="https://www.instagram.com/yuri.tech/" class="text-rede" target="_blank">
                        <q-icon name="fa-brands fa-instagram" color="pink" size="4rem" />
                        <p class="text-h4 text-bold q-my-lg   ">@yuri.tech</p>
                    </a>

                </div>
                <div class="col-12 col-sm-3 col-md-3 col-lg-3 q-mb-xl text-center bounce">
                    <a href="https://www.facebook.com/YuriTechReparos/?locale=pt_BR" class="text-rede" target="_blank">
                        <q-icon name="fa-brands fa-facebook" color="blue" size="4rem" />
                        <p class="text-h4 text-bold q-my-lg">YuriTechReparos</p>
                    </a>

                </div>
                <div class="col-12 col-sm-3 col-md-3 col-lg-3  q-mb-xl text-center bounce">
                    <a href="https://www.tiktok.com/@yuri.tech" class="text-rede" target="_blank">
                        <q-icon name="fa-brands fa-tiktok" color="black" size="4rem" />
                        <p class="text-h4 text-bold q-my-lg">@yuri.tech</p>
                    </a>

                </div>
                <div class="col-12 col-sm-3 col-md-3 col-lg-3  q-mb-xl text-center bounce">
                    <a href="https://www.youtube.com/c/YuriTechReparos/videos" class="text-rede" target="_blank">
                        <q-icon name="fa-brands fa-youtube" color="red" size="4rem" />
                        <p class="text-h4 text-bold q-my-lg">Yuri Tech Reparos</p>
                    </a>

                </div>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
.border-tb {
    border-top: solid 5px $borda-top;
    border-bottom: solid 5px $borda-top;
}

.bounce {
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.5s;
&:hover {
    transform: scale(1.2);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);

}
    
}



.text-rede {
    color: $borda-top;
    text-decoration: none;
}
</style>
    
<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'ContatoSocial'



})
</script>
    