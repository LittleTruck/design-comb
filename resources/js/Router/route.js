const routes = [
    {
        path: '',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: '',
        component: () => import('../Pages/About.vue'),
        name: 'about'
    },
]

export  default routes;
