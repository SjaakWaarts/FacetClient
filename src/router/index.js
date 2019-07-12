import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueKanban from 'vue-kanban'
import vueFullCalendar from 'vue-full-calendar'
import { VueFlux, FluxPagination, Transitions } from 'vue-flux'

import 'fullcalendar/dist/fullcalendar.css'

Vue.use(Router)
Vue.use(vueKanban)
Vue.use(vueFullCalendar)
Vue.use(VueFlux)
Vue.use(FluxPagination)
Vue.use(Transitions)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
