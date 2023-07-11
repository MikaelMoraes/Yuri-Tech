<template>
    <div class="q-pa-md q-gutter-sm bg-color">
        <div class="row items-center q-pa-xl orientation-landscape justify-center ">
            <div class="col text-center">
                <q-icon name="fa-solid fa-memory" color="white" size="4.5rem" />
              
                <div class="text-h6 text-white"> Memoria Ram</div>
            </div>
            <div class="col text-white text-center">
           
                <p class="text-h6"><strong>{{ seleciona_memoria }}</strong></p>
             
            </div>
            <div class="col text-center">
                <q-btn label="Escolha a memoria ram" color="primary" @click="alert = true" />
            </div>
        </div>
        <q-dialog v-model="alert">
            <q-card class="bg-color">
                <q-card-section>
                    <div class="text-h6 text-white">Selecione a Memoria Ram </div>
                </q-card-section>
                <q-card-section class="q-pt-none" v-model="seleciona_memoria">
                    <div class="row items-center q-pa-xl  justify-center text-white border-top"
                        v-for="caracteristica in memoria_ram" :key="caracteristica.capacidade" :value="caracteristica.capacidade">
                        <div class="col">
                            <p>{{ caracteristica.capacidade }}</p>
                        </div>
                        <div class="col">
                             <p>quantidade: {{ caracteristica.quantidade }}</p>
                        </div>
                        <div class="col text-center">
                            <q-btn label="Incluir" color="primary"  @click="seleciona_memoria =` ${caracteristica.capacidade} ${ caracteristica.quantidade}`" v-close-popup/>
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions align="right" class="border-top">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>
<style lang="scss" scoped>
.bg-color {
    background-color: $bg-color;
}

.border-top {
    border-top: solid 5px $borda-top;
}
</style>
<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
    name: 'memoriaRamModel',
    setup() {
        return {
            alert: ref(false),
            memoria_ram: [],
            seleciona_memoria: ""
        }
    },
    mounted() {
        const baseUrl = 'http://localhost:3000'
        fetch(`${baseUrl}/memoria_ram`)
            .then(response => response.json())
            .then(setup => this.memoria_ram = setup)
    }

})
</script>
  