import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. Importe o Pinia

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia() // 2. Crie a instância do Pinia

app.use(pinia) // 3. Diga ao app para usar o Pinia
app.use(router)

app.mount('#app')