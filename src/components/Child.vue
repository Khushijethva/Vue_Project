<template>
<h1> Hello I am Child Component </h1>
<button v-on:click="getUser(username)" > Send User Name</button>
</template>
<script>
export default
{
 name:'ChildCompo',
 data(){
    return{
        username : 'khushi',

    }
 },
 props:
 {
    getUser: Function
 }

}
</script>
<style>
</style>