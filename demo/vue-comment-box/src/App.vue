<template>
<div class="container">
  <myHeader></myHeader>
  <router-view></router-view>
</div>
</template>

<script>
import myHeader from './component/header.vue'

export default {
  components: {
    myHeader,
  }
}
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
