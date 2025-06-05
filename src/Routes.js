import {createWebHistory,createRouter} from 'vue-router';

import HomePage from './components/Home.vue';
import DynamicData from './components/dynamic.vue';
import  ProfileData from './components/Profile.vue';
import PageNotFound from './components/404.vue';


const routes=[
    {
        name:'Home',
        path:'/Home',
        component:HomePage
    },

    {
        name:'Profile',
        path:'/Profile',
        component:ProfileData
    },

    {
        name:'dynamic',
        path:'/dynamic/:name',
        component:DynamicData

    },
    
    {
        name:'PageNotFound',
        path:'/:pathMatch(.*)*', // Any type Path not match use this page 
        component:PageNotFound

    }

];



// create router High Order Function elements fetch
const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;






