<template>
  <div >
    <p> item list added is {{this.itemlist}} </p>
  </div>
</template>

<script>
export default {
    name:"cartComp",
    inject: ['itemNum'],

    data(){
        return{
            itemlist: this.itemNum
        }
    }

}
</script>

<style>

</style>