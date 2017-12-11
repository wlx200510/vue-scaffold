import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import notFound from '@/components/notFound'

Vue.use(Router)

const not_found = () => Promise.resolve(notFound)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'notFound',
      component: not_found
    }
  ]
})
