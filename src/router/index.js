import { createRouter, createWebHistory } from 'vue-router'
import ClientesView from '../views/ClientesView.vue'
import DetalhesCliente from '@/views/DetalhesCliente.vue'

const routes = [
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView
  },
  {
    path: '/cliente/:id',
    name: 'cliente',
    component: DetalhesCliente
  },
  {
    path: '/produtos',
    name: 'produtos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProdutoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
