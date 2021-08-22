import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import LoginComponent from "../views/Login.vue"
import DashboardComponent from "../views/Dashboard.vue"
import RegisterComponent from "../views/Register.vue"
window.axios = require('axios');

Vue.use(VueAxios)

Vue.use(VueRouter)


export default new VueRouter({
    routes: [   
        {
            path: "/",
            name: "login",
            component: LoginComponent
        },     
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashboardComponent
        },
        {
            path: "/register",
            name: "register",
            component: RegisterComponent
        }
    ]
})