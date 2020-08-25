export default {
    routes : [{
        path : '/login',
        name : 'login',
        component: resolve => require(['components/forms/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['components/forms/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },]
}