import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from "../components/MainCard.vue"
import Error from "../components/error.vue";

const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/invitation/:id",
            name: "invitation",
            component: Home
        },
        {
            path:"/:pathMatch(.*)*",
            name: "error",
            component: Error
        }
    ]
})

export default Router;