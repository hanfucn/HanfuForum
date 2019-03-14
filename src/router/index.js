import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'

import forum from '@/page/forum/index'
const AuthIndex = () => import('@/page/auth/index')
const Login = () => import('@/page/auth/login')
const Register = () => import('@/page/auth/register')

import tinycmeVue from '@/page/forum/editing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/auth',
      meta: {
        requiresAuth: false
      },
      component: AuthIndex,
      children: [
        {
          path: '/auth/login',
          name: 'login',
          components: {
            auth: Login
          }
        },
        {
          path: '/auth/register',
          name: 'register',
          components: {
            auth: Register
          }
        }
      ]
    },
    {
      path: '/forum',
      components: {
        default: forum
      },
      children: [
        {
          path: '/forum',
          name: 'forum',
          components: {
            default: forum
          }
        }
      ]
    },
    {
      path: '/editing',
      name: 'editing',
      components: {
        default: tinycmeVue
      }
    }
  ]
})
