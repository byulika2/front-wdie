import Vue from 'vue'
import VueRouter from 'vue-router'
import MainDashboard from "@/views/MainDashboard.vue";
import GridSystem from "@/views/GridSystem.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'MainDashboard',
        component: MainDashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;