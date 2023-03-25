import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../components/MainCard.vue"
import Error from "../components/error.vue";

const Router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name: "invitation",
            component: () => Home
        },
        {
            path:"/:pathMatch(.*)*",
            name: "error",
            component: Error
        }
    ]
})

export default Router;