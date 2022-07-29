import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('./pages/Login.vue'),
    },
    {
        path: '/dashboard',
        component: () => import('./pages/Dashboard.vue'),
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
