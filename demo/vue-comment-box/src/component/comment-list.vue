<template>
<div>
  <textarea class="form-control" rows="3" placeholder="留言" v-model.trim="content" maxlength="100"></textarea>
  <button type="button" class="btn btn-secondary" @click="comment">留言</button>
  <input class="form-control" id="user" placeholder="小硫酸铜" maxlength="10" v-model.trim="user" @change="changeUser" />
  <div id="comment" class="col-xs-12" v-show="this.$store.getters.commentListIsLike.length>0" style="display:none;border-bottom:0px;">
    <li v-for="comment in this.$store.getters.commentListIsLike">
      <table class="tourist-table">
        <tbody>
          <tr>
            <img :src="getImg(comment.user)">
            <td class="detail pull-left" width="auto">
              <div>
                <strong>{{comment.user}}</strong>
                <span class="time">{{getDateString(comment.time)}}</span>
              </div>
              <div class="content">{{comment.content}}</div>
              <div class="operate">
                <span class="cursor-pointer" v-bind:class="{'is-like':comment.isLike}" @click="likeOrNot(comment.id)">赞 {{comment.like.length}}</span>
                <span class="cursor-pointer" v-show="(user==''&&comment.user=='小硫酸铜')||user==comment.user" @click="deleteComment(comment.id)">删除</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="line"></div>
    </li>
  </div>
</div>
</template>

<script>
import md5 from 'js-md5'

export default {
  data() {
    return {
      user: this.$store.state.user,
      content: '留言'
    }
  },
  methods: {
    changeUser() {
      this.$store.dispatch('changeUser', this.user);
    },
    comment() {
      if (this.content != '') {
        this.$store.dispatch('comment', this.content);
        this.content = '留言';
      }
    },
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

<style scope>
li {
  list-style-type: none;
}

td {
  width: 100%;
}

button {
  margin-top: 10px;
  cursor: pointer;
}

#user {
  margin-top: 10px;
  width: 50%;
  float: right;
}

.line {
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
}

#comment {
  border: 1px solid #e2e2e2;
  background-color: white;
  font-size: 90%;
  border-radius: 5px;
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
}

#comment table {
  margin: 10px 0px;
}

#comment img {
  margin: 0px 10px;
  width: 48px;
}

#comment .is-like {
  color: red;
}

#comment .detail {
  padding-right: 15px;
}

#comment .content {
  margin-top: 3px;
  line-height: 20px;
  margin-bottom: 10px;
}

#comment .time {
  color: #777;
  font-size: 85%;
  float: right;
}

#btn-comment {
  margin: 20px 0px;
}

#content-button {
  margin-top: 20px;
}

#comment-num {
  line-height: 33px;
  margin-left: 10px;
}

.operate {
  color: #777;
  font-size: 85%;
}

.operate span {
  margin-right: 5px;
}
</style>
