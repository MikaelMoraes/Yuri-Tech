<template>
    <div class="q-pa-md q-gutter-sm bg-color">
        <div class="row items-center q-pa-xl justify-center ">
            <div class="col-12 col-sm-6 col-lg-4 col-md-4 text-center ">
                <q-icon name="fa-solid fa-hard-drive" color="white" size="4.5rem" /> 
                <div class="text-h6 text-white"> Armazenamento</div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 col-md-4 text-white text-center ">
                
                <p class="text-h6"><strong>{{ seleciona_armazenamento }}</strong></p>
             
            </div>
            <div class="col-12 col-sm-6 col-lg-4 col-md-4 text-center ">
                <q-btn label="Escolha o Armazenamento" color="primary" @click="alert = true" />
            </div>
        </div>
        <q-dialog v-model="alert">
            <q-card class="bg-color">
                <q-card-section>
                    <div class="text-h6 text-white">Selecione o Armazenamento</div>
                </q-card-section>
                <q-card-section class="q-pt-none" v-model="seleciona_armazenamento">
                    <div class="row items-center q-pa-xl  justify-center text-white border-top"
                        v-for="caracteristica in armazenamento.armazenamento" :key="caracteristica.tipo" :value="caracteristica.tipo">
                        <div class="col-6">
                            <p>{{ caracteristica.tipo }}</p>
                             <p>Capacidade: {{ caracteristica.capacidade }}</p>
                        </div>
                        <div class="col-6 text-center">
                            <q-btn label="Incluir" color="primary"  @click="seleciona_armazenamento =` ${caracteristica.capacidade} ${ caracteristica.tipo}`, enviarArmazenamento()" v-close-popup/>
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
    name: 'armazenamentoModel',
    setup() {
        return {
            alert: ref(false),
            armazenamento: [],
            seleciona_armazenamento: ""
        }
    },
    created() {
        axios.get('/DB/db.json')
            .then(response => {
                this.armazenamento = response.data;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON:', error);
            });
    },
    methods:{
        enviarArmazenamento(){
            this.$emit('armazenamento',
                this.seleciona_armazenamento
            )
        }
    }

})
</script>
  