<template>
  <div class="notification">
    <h4>product added to cart</h4>
  </div>
</template>

<script>
export default {
name: "Notification"
}
</script>

<style scoped lang="scss">
 .notification {
   position: absolute;
   top: 5px;
   padding: 7px;
   background-color: green;
   border-radius: 5px;
   color: white;
   right: 100px;
   h4 {
     margin: 0;
   }
 }

</style>