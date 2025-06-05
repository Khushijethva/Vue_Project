<template>
<h1>Vue.js in Slots </h1>
<p>{{ data }}</p>
<!-- Slots Use For Pass another formate data like : Html, XMl , Json Use -->
<slot> <p> Slots Defualt Value </p> </slot>


<!-- Name Slots use for specific name add -->
<div>
<slot name="SlotSec"> <p> Slots Defualt Value </p> </slot>
</div>


<div>
    <slot name="social_Media"> <p> Social Media Platforms </p> </slot>
</div>
<!-- Name Slots use for specific name add -->


</template>

<script>

export default
{
    name:'SlotsDemo',
    data(){
        return{
         
        }
    },
    props:
    {
        data:String,
    }


}
</script>
<style>
</style>