<template>
  <router-view />
</template>


<style>
body {

  min-height: 100vh;
}

body::-webkit-scrollbar {
  width: 12px;
}

body::-webkit-scrollbar-track {
  background: #ffffff;
}

body::-webkit-scrollbar-thumb {
  background-color: #03588C;
  border-radius: 30px;
  border: 3px solid #ffffff;
}
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
