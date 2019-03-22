import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'

const articleIndex = () => import('@/page/forum/index')
const articleContext = () => import('@/page/forum/articleContext')
const forumArticle = () => import('@/page/forum/article')
const AuthIndex = () => import('@/page/auth/index')
const Login = () => import('@/page/auth/login')
const Register = () => import('@/page/auth/register')

import tinycmeVue from '@/page/forum/editing'

import t from '../components/textarea'

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
      component: articleIndex,
      children: [
        {
          path: '/forum',
          name: 'forum',
          components: {
            forumIndex: articleContext
          }
        },
        {
          path: '/forum/article/:pageId',
          name: 'article',
          components: {
            forumIndex: forumArticle
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
    },
    {
      path: '/t',
      name: 't',
      components: {
        default: t
      }
    }
  ]
})
