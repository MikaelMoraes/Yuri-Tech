<template>
    <div class="bg-color">
            <Processador v-on:processador="cpu($event)" />
            <PlacaMaeModel v-on:placaMae="placaMae($event)" />
            <memoriaRamModel v-on:memoriaRam="memoriaRam($event)" />
            <placaVideoModel v-on:placaVideo="placaVideo($event)" />>
            <armazenamentoModel v-on:armazenamento="Armazenamento($event)" />
            <fonteModel v-on:fonte="Fonte($event)" />
            <div class="row q-pa-xl ">
                <div class="col text-center">
                    <a class="btn-montagem bounce" target="_blank"
                :href="`https://wa.me/5521970134982?text=Ol%C3%A1+gostaria+de+um+or%C3%A7amento+para+essa+configura%C3%A7%C3%A3o+de+computador%F0%9F%96%A5%EF%B8%8F%F0%9F%96%A5%EF%B8%8F%F0%9F%96%A5%EF%B8%8F++Processador%3A${cpuValue}++Placa+M%C3%A2e%3A${placaMaeValue}++Placa+de+Video%3A${placaVideoValue}++Memoria+Ram%3A${memoriaRamValue}++Armazenamento%3A${armazenamentoValue}++Fonte%3A${fonteValue}`">Enviar Pedido</a>
                </div>
            </div>
    </div>
</template>
<style lang="scss" scoped>
.bg-color {
    background-color: $bg-color;
}
.btn-montagem {
  background-color: $warning ;
  color: black;
  font-size: 25px;
  padding: 20px;
  text-decoration: none;
  border-radius: 10px;
  &:hover{
    color: $card-border-color;
  }
}
.bounce {
    transform: perspective(1px) translateZ(0);
    transition-duration:  0.5s;
&:hover {
    transform: scale(1.2);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);

}
    
}
</style>
<script>
import { defineComponent, ref } from 'vue'
import Processador from 'src/components/montagem/processadorModel.vue'
import PlacaMaeModel from 'src/components/montagem/placaMaeModel.vue'
import armazenamentoModel from 'src/components/montagem/armazenamentoModel.vue'
import memoriaRamModel from 'src/components/montagem/memoriaRamModel.vue'
import fonteModel from 'src/components/montagem/fonteModel.vue'
import placaVideoModel from 'src/components/montagem/placaVideoModel.vue'



export default defineComponent({
    name: 'IndexPage',
    components: {
        Processador,
        PlacaMaeModel,
        armazenamentoModel,
        memoriaRamModel,
        fonteModel,
        placaVideoModel

    },
    setup() {
        const cpuValue = ref('');
        const placaMaeValue = ref('');
        const memoriaRamValue = ref('');
        const placaVideoValue = ref('');
        const armazenamentoValue = ref('');
        const fonteValue = ref('');

        const cpu = (p) => {
            cpuValue.value = p;
        };

        const placaMae = (pm) => {
            placaMaeValue.value = pm;
        };

        const memoriaRam = (mr) => {
            memoriaRamValue.value = mr;
        };

        const placaVideo = (pv) => {
            placaVideoValue.value = pv;

        };

        const Armazenamento = (a) => {
            armazenamentoValue.value = a;
        };

        const Fonte = (f) => {
            fonteValue.value = f;
        };

        return {
            cpuValue,
            placaMaeValue,
            memoriaRamValue,
            placaVideoValue,
            armazenamentoValue,
            fonteValue,
            cpu,
            placaMae,
            memoriaRam,
            placaVideo,
            Armazenamento,
            Fonte,
        };
    },
})
</script>
  