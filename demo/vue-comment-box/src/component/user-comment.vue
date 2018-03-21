<template>
<div>
  <router-link to="/">所有留言</router-link>
  <p>{{$route.query.id}}的留言</p>
  <commentList :commentList="commentListById"></commentList>
</div>
</template>

<script>
import commentList from './comment-list.vue'

export default {
  components: {
    commentList,
  },
  computed: {
    commentListById() {
      return this.$store.getters.commentListIsLike;
    }
  }
}
</script>

<style scope>
p {
  margin-top: 20px;
}
</style>
