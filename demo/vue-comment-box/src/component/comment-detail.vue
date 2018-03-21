<template>
<tr>
  <img :src="getImg(comment.user)">
  <td class="detail pull-left" width="auto">
    <div>
      <strong><router-link :to="{path:'/user',query:{id:comment.user}}">{{comment.user}}</router-link></strong>
      <span class="time">{{getDateString(comment.time)}}</span>
    </div>
    <div class="content">{{comment.content}}</div>
    <div class="operate">
      <span class="cursor-pointer" v-bind:class="{'is-like':comment.isLike}" @click="likeOrNot(comment.id)">赞 {{comment.like.length}}</span>
      <span class="cursor-pointer" v-show="(this.$store.state.user==''&&comment.user=='小硫酸铜')||this.$store.state.user==comment.user" @click="deleteComment(comment.id)">删除</span>
    </div>
  </td>
</tr>
</template>

<script>
import md5 from 'js-md5'

export default {
  props: ['comment'],
  methods: {
    likeOrNot(id) {
      this.$store.dispatch('likeOrNot', id);
    },
    deleteComment(id) {
      this.$store.dispatch('deleteComment', id);
    },
    getDateString(time) {
      var time = Date.parse(new Date()) / 1000 - time;
      if (time > 30 * 24 * 3600) {
        return parseInt(time / (30 * 24 * 3600)) + '月前';
      } else if (time > 24 * 3600) {
        return parseInt(time / (24 * 3600)) + '天前';
      } else if (time > 3600) {
        return parseInt(time / 3600) + '小时前';
      } else if (time > 60) {
        return parseInt(time / 60) + '分钟前';
      } else if (time > 0) {
        return parseInt(time) + '秒前';
      } else {
        return '刚刚';
      }
    },
    getImg(string) {
      return 'https://v2ex.assets.uxengine.net/gravatar/' + md5(string) + '?s=48&d=retro';
    }
  }
}
</script>
