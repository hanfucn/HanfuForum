import Vue from 'vue'
import Router from 'vue-router'

const viewsIndex = () => import('@/views/index')
const forumIndex = () => import('@/views/forum/index')
const forumArticle = () => import('@/views/forum/article')

const authIndex = () => import('@/views/auth/index')
const authLogin = () => import('@/views/auth/login')
const authRegister = () => import('@/views/auth/register')

const activityIndex = () => import('@/views/activity/index')

import tinycmeVue from '@/views/forum/editing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'forum'
      }
    },
    {
      path: '/auth',
      meta: {
        requiresAuth: false
      },
      component: authIndex,
      children: [
        {
          path: '/auth/login',
          name: 'login',
          components: {
            auth: authLogin
          }
        },
        {
          path: '/auth/register',
          name: 'register',
          components: {
            auth: authRegister
          }
        }
      ]
    },
    {
      path: '/forum',
      component: viewsIndex,
      children: [
        {
          path: '/forum',
          name: 'forum',
          components: {
            default: forumIndex
          }
        },
        {
          path: '/forum/:pageId',
          name: 'article',
          components: {
            default: forumArticle
          }
        }
      ]
    },
    {
      path: '/forum/editing',
      name: 'editing',
      component: tinycmeVue
    },
    {
      path: '/activity',
      component: activityIndex,
      children: [
        {
          path: '/activity',
          name: 'activity',
          components: {
            default: activityIndex
          }
        }
      ]
    }
  ]
})
