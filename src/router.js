import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dover from './views/Over.vue'
import Contact from './views/Contact.vue'
import Producten from './views/Producten.vue'
import ProductDetails from './views/ProductDetails.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cover',    /* moet met kleine letter    cover ook voor keuzemenu 
                          // 'Over' in header: <router-link to="/cover" >over</router-link>*/
      name: 'over',      /* over mag ook Over zijn, ook al is het een alternatief voor path, 
                        // mag wellicht ook andere benaming hebben */
      component: Dover
    },
    {
      path: '/contact',                
      name: 'contact',               
      component: Contact
    },
    {
      path: '/producten',                
      name: 'producten',                 
      component: Producten
    },
    {
      path: '/producten/:productAId',
      name: 'product-details',
      component: ProductDetails,
      // props: true zorgt ervoor dat de dynamische argumenten
      // als prop worden doorgegeven aan de component
      props: true 
    }   
  ]
})
