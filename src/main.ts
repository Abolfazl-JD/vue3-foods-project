import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'

const head = createHead()

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    routes,
    history: createWebHistory()
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
