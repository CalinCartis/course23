import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import OfferView from '../views/OfferView.vue'
import FilterView from '../views/FilterView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/offer',
      name: 'offer',
      component: OfferView
    },
    {
      path: '/filter',
      name: 'filter',
      component: FilterView
    }
  ]
})

export default router
