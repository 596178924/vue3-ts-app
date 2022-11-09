import {  RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import('@v/home/index.vue'),
    }
]

export default routes
