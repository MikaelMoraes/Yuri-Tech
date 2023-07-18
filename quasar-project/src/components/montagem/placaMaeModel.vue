<template>
    <div class="q-pa-md q-gutter-sm bg-color">
        <div class="row items-center q-pa-xl  justify-center ">
            <div class="col-12 col-sm-6 col-lg-4 col-md-4  text-center">
                <q-icon name="fa-solid fa-border-all" color="white" size="4.5rem" />
                <div class="text-h6 text-white">Placa Mãe</div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 col-md-4  text-white text-center">
                <p class="text-h6"><strong> {{ seleciona_placa_mae }}</strong></p>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 col-md-4  text-center">
                <q-btn label="Escolha a Placa Mãe" color="primary" @click="alert = true" />
            </div>
        </div>
        <q-dialog v-model="alert">
            <q-card class="bg-color">
                <q-card-section>
                    <div class="text-h5 text-white">Selecione a Placa Mãe</div>
                </q-card-section>
                <q-card-section class="q-pt-none" v-model="seleciona_placa_mae">
                    <div class="row items-center q-pa-xl  justify-center text-white border-top"
                        v-for="caracteristica in placa_mae.placa_mae" :key="caracteristica.modelo" :value="caracteristica.modelo">
                        <div class="col-12">
                            <p class="text-h6">{{ caracteristica.modelo }}</p>
                        </div>
                        <div class="col-12 col-lg-6 col-md-6">
                            <p>
                                Chipset: {{ caracteristica.chipset }} <br>
                                Socket: {{ caracteristica.soquete }}
                            </p>
                        </div>
                            <div class="col-12 col-lg-6 col-md-6 text-center">
                                <q-img :src="`${caracteristica.imagem}`" alt="" style="height: 200px; max-width: 200px">
                                </q-img>
                            </div>
                        <div class="col-12 text-center q-pt-xl">
                            <q-btn label="Incluir" color="primary" @click="seleciona_placa_mae = caracteristica.modelo,  enviarPlacaMae()"
                                v-close-popup />
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions align="right" class="border-top">
                    <q-btn flat label="OK" color="warning" v-close-popup />
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
import axios from 'axios'
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
    created() {
        axios.get('/DB/db.json')
            .then(response => {
                this.placa_mae = response.data;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON:', error);
            });
    },
    methods:{
        enviarPlacaMae(){
            this.$emit('placaMae',
                this.seleciona_placa_mae
            )
        }
    }

})
</script>
  