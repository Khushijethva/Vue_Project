<template>
<h1>
    Dynamic Data Pass using Routing 
</h1>
<p> Dynamic Data : {{ value }}</p>
</template>
<script>
import {useRoute} from 'vue-router'
export default{
    name:'DynamicData',
    data(){
        return{
        value:''
        }
    },
    mounted()
    {
        //Dynamic url in add data fetch and print values 
        const route = useRoute();
        this.value = route.params.name;
        console.log("route" , route.params);
        


    }



}
</script>
<style>
</style>