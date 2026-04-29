import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Portfolio from './views/Portfolio.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre', name: 'About', component: About },
  { path: '/servicos', name: 'Services', component: Services },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contato', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
