<template>
    <div class="back-to-top-button text-white" v-show="showButton" @click="scrollToTop">
        <i class="fas fa-chevron-up"></i>
    </div>
</template>
<style lang="scss" scoped>
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