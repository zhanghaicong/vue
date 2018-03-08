<template>
<div class="jumbotron">
  <h1>{{headerData.title}}</h1>
  <a target="_blank" class="btn btn-secondary btn-sm" v-for="link in headerData.links" :href="link.href">{{link.title}}</a>
</div>
</template>

<script>
export default {
  data() {
    return {
      headerData: this.$store.state.headerData
    }
  }
}
</script>

<style scope>
a {
  margin-right: 10px;
}
</style>
