import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCWidw0NB33-WqLJSSchg47XhbfQEsSf8U',
    },
}).mount('#app')