<template>
    <div class="q-pa-md q-gutter-sm bg-color border">
        <div class="row items-center q-pa-xl orientation-landscape justify-center ">
            <div class="col text-center">
                <q-icon name="fa-solid fa-plug" color="white" size="4.5rem" />
                <div class="text-h6 text-white"> Fonte</div>
            </div>
            <div class="col text-white text-center">
             <p class="text-h6"><strong>{{ seleciona_fonte }} </strong></p>
            </div>
            <div class="col text-center">
                <q-btn label="Escolha a Fonte" color="primary" @click="alert = true" />
            </div>
        </div>
        <q-dialog v-model="alert">
            <q-card class="bg-color">
                <q-card-section>
                    <div class="text-h6 text-white">Selecione a Fonte </div>
                </q-card-section>
                <q-card-section class="q-pt-none" v-model="seleciona_fonte">
                    <div class="row items-center q-pa-xl  justify-center text-white border-top"
                        v-for="caracteristica in fonte" :key="caracteristica.potencia" :value="caracteristica.potencia">
                        <div class="col">
                             <p>potencia: {{ caracteristica.potencia }}</p>
                        </div>
                        <div class="col text-center">
                            <q-btn label="Incluir" color="primary"  @click="seleciona_fonte =` ${caracteristica.potencia}`" v-close-popup/>
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
    name: 'fonteModel',
    setup() {
        return {
            alert: ref(false),
            fonte: [],
            seleciona_fonte: ""
        }
    },
    mounted() {
        const baseUrl = 'http://localhost:3000'
        fetch(`${baseUrl}/fonte`)
            .then(response => response.json())
            .then(setup => this.fonte = setup)
    }

})
</script>
  