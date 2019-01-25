import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import profile from '@/components/profile'
import login from '@/components/login'
import code from '@/components/code'
import collab from '@/components/collab'
import showcase from '@/components/showcase'
import messages from '@/components/messages'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/code',
      name: 'code',
      component: code
    },
    {
      path: '/collab',
      name: 'collab',
      component: collab
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: showcase
    },
    {
      path: '/messages',
      name: 'messages',
      component: messages
    }
  ],
  mode: 'history'
})
