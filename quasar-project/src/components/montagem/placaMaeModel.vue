<template>
    <div class="q-pa-md q-gutter-sm bg-color">
        <div class="row items-center q-pa-xl orientation-landscape justify-center ">
            <div class="col text-center">
                
                <q-icon name="fa-solid fa-border-all" color="white" size="4.5rem" />
                <div class="text-h6 text-white"> Placa Mãe</div>
               
            </div>
            <div class="col text-white text-center">
               
                <p class="text-h6"><strong> {{ seleciona_placa_mae }}</strong></p>
            </div>
            <div class="col text-center">
                <q-btn label="Escolha a Placa Mãe" color="primary" @click="alert = true" />
            </div>
        </div>
        <q-dialog v-model="alert" >
            <q-card class="bg-color" >
                <q-card-section>
                    <div class="text-h6 text-white">Selecione a Placa Mãe</div>
                </q-card-section>
                <q-card-section class="q-pt-none" v-model="seleciona_placa_mae">
                    <div class="row items-center q-pa-xl  justify-center text-white border-top" 
                    v-for="caracteristica in placa_mae" :key="caracteristica.modelo" :value="caracteristica.modelo">
                        <div class="col text-center">
                           <p>{{ caracteristica.modelo }}</p> 
                        </div>
                        <div class="col">
                            <p>
                                Chipset: {{ caracteristica.chipset}}
                                Socket: {{ caracteristica.soquete }}
                            </p>
                        </div>
                        <div class="col text-center">
                            <q-btn label="Incluir" color="primary"  @click="seleciona_placa_mae = caracteristica.modelo" v-close-popup/>
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
    name: 'PlacaMaeModel',
    setup() {
        return {
            alert: ref(false),
            placa_mae: [],
            seleciona_placa_mae: ""
        }
    },
    mounted() {
        const baseUrl = 'http://localhost:3000'
        fetch(`${baseUrl}/placa_mae`)
            .then(response => response.json())
            .then(setup => this.placa_mae = setup)
    }

})
</script>
  