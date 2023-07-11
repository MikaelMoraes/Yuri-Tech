<template>
    <div class="q-pa-md q-gutter-sm bg-color">
        <div class="row items-center q-pa-xl orientation-landscape justify-center ">
            <div class="col text-center">

                <q-icon name="fa-solid fa-microchip" color="white" size="4.5rem" />
                <div class="text-h6 text-white"> Processador</div>

            </div>
            <div class="col text-white text-center">
             
                <p class="text-h6"><strong>{{ seleciona_processador }}</strong></p>
            </div>
            <div class="col text-center">
                <q-btn label="Escolha o processador" color="primary" @click="alert = true" />
            </div>
        </div>
        <q-dialog v-model="alert">
            <q-card class="bg-color">
                <q-card-section>
                    <div class="text-h6 text-white">Selecione o Processador</div>
                </q-card-section>
                <q-card-section class="q-pt-none" v-model="seleciona_processador">
                    <div class="row items-center q-pa-xl  justify-center text-white border-top"
                        v-for="caracteristica in processadores" :key="caracteristica.modelo" :value="caracteristica.modelo">
                        <div class="col">
                            <p>{{ caracteristica.modelo }}</p>
                        </div>
                        <div class="col">
                            <p>
                                Frequencia base: {{ caracteristica.frequencia_base }}
                                Frequencia Maxima: {{ caracteristica.frequencia_maxima }}
                                Nucleos: {{ caracteristica.nucleos }}
                                Threads: {{ caracteristica.threads }}
                                Socket: {{ caracteristica.soquete }}
                                Consumo Energia: {{ caracteristica.consumo_energia }}
                            </p>
                        </div>
                        <div class="col text-center">
                            <q-btn label="Incluir" color="primary"  @click="seleciona_processador = caracteristica.modelo" v-close-popup/>
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
    name: 'ProcessadorModel',
    setup() {
        return {
            alert: ref(false),
            processadores: [],
            seleciona_processador: ""
        }
    },
    mounted() {
        const baseUrl = 'http://localhost:3000'
        fetch(`${baseUrl}/processadores`)
            .then(response => response.json())
            .then(setup => this.processadores = setup)
    }

})
</script>
  