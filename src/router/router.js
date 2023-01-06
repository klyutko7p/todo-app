import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Done from '@/pages/Done'
import List from '@/pages/List'
import CreateTask from '@/pages/CreateTask'
import Error404 from '@/pages/Error404'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/done',
    name: 'done',
    component: Done,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateTask,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: Error404,
},
]

const router = createRouter({
  routes,
  history: createWebHistory('/todo-app/')
})

export default router

