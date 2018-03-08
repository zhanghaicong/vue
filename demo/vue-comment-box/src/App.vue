<template>
<div class="container">
  <myHeader></myHeader>
  <commentList></commentList>
</div>
</template>

<script>
import myHeader from './component/header.vue'
import commentList from './component/comment-list.vue'

export default {
  components: {
    myHeader,
    commentList,
  }
}
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
