/*

  Copyright (C) 2019 张珏敏.

  This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/

import Vue from 'vue'
import Router from 'vue-router'

const articleIndex = () => import('@/page/forum/index')
const articleContext = () => import('@/page/forum/articleContext')
const forumArticle = () => import('@/page/forum/article')
const AuthIndex = () => import('@/page/auth/index')
const Login = () => import('@/page/auth/login')
const Register = () => import('@/page/auth/register')

const activityIndex = () => import('@/page/activity/index')

import tinycmeVue from '@/page/forum/editing'

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
