<template>
  <div @click="click">Hello World</div>
  <!-- <Hello></Hello> -->
  <!-- <Message></Message> -->
</template>

<script>
// import {Message, createCom} from "../packages/message/src/"
export default {
   name:'App',
//    components:{Message},
   setup(){
     return {
        click:()=>{
        //   console.log(Message, createCom)
        //   createCom(Message)
        }
     }
   }
}
</script>

<style>

</style>