<template>
    <div class="whatsapp text-white">
        <a href="https://api.whatsapp.com/send?phone=5521970134982&text=Ol%C3%A1,%20desejo%20me%20comunicar%20com%20a%20Yuri%20Tech%20Reparos"
            target="_blank">
            <q-icon name="fa-brands fa-whatsapp" color="white" size="2rem" />
        </a>
    </div>
    <div class="back-to-top-button text-white" v-show="showButton" @click="scrollToTop">
        <i class="fas fa-chevron-up"></i>
    </div>
</template>
<style lang="scss" scoped>
.whatsapp {
    position: fixed;
    bottom: 75px;
    right: 10px;
    background-color: $positive;
    padding: 10px 10px;
    border-radius: 100%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    transform: scale(1);
    animation: pulse 2s infinite;
    z-index: 9999;
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
    }

    70% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(0.95);
    }
}

.back-to-top-button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: $card-color;
    padding: 10px 10px;
    border-radius: 20%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    font-size: 24px;
    z-index: 9999;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.5s;
}

.back-to-top-button:hover {
    transform: scale(1.2);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);

}
</style>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'VoltaTopo',
    data() {
        return {
            showButton: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        handleScroll() {
            this.showButton = window.pageYOffset > 100
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
})
</script>