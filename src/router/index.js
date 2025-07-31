import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GeneratorView from '../views/GeneratorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gerador',
      name: 'generator',
      component: GeneratorView
    },
    {
      path: '/:siteId', // O ':' indica que 'siteId' é um parâmetro dinâmico
      name: 'siteView',
      // Lazy-loading: O componente só é carregado quando esta rota é acessada.
      component: () => import('../views/SiteView.vue')
    }
  ]
})

export default router