import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VChild from '@/components/vChild'
import Parent from '@/components/parent'
import Three from '@/components/three'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/vChild',
      name:'VChild',
      component:VChild
    },
    {
      path:'/parent',
      name:'Parent',
      component:Parent
    },
    {
      path:'/three',
      name:'Three',
      component:Three
    },
    {
      path:"/test/:id/:name",
      name:'/test',
      component:Test
    }
  ]
})
