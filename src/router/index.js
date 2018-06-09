import Vue from 'vue'
import Router from 'vue-router'

import Demo from '@/pages/demo/demo'
import Test from '@/pages/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
