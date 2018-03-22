<template>
<div>
  <router-link to="/">所有留言</router-link>
  <p>{{$route.params.user}}的留言（{{commentListByUser.length}}）</p>
  <commentList :commentList="commentListByUser"></commentList>
</div>
</template>

<script>
import commentList from './comment-list.vue'

export default {
  components: {
    commentList,
  },
  computed: {
    commentListByUser() {
      let commentList = [];
      this.$store.getters.commentListIsLike.map(x => {
        x.user == this.$route.params.user ? commentList.push(x):'';
      });
      return commentList;
    }
  }
}
</script>

<style scope>
p {
  margin-top: 20px;
}
</style>
