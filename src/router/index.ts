import {createRouter,createWebHistory} from "vue-router"
// import HelloWorld from "@/components/HelloWorld.vue";
import Son from "@/components/Son.vue";

const routes = [
    {
        path:'/',
        // component:HelloWorld,
        children:[
            {path:'',component:Son}
        ],
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
