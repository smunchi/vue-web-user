import Vue from 'vue'
import VueRouter from 'vue-router'
import 'es6-promise/auto'
import axios from 'axios'
import VueAxios from 'vue-axios'
import LoginComponent from "../views/Login.vue"
import DashboardComponent from "../views/Dashboard.vue"
import RegisterComponent from "../views/Register.vue"

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

Vue.use(VueRouter)


export default new VueRouter({
    routes: [   
        {
            path: "/",
            name: "login",
            component: LoginComponent
        }, 
        {
            path: "/login",
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