<template>
<div id="comment" class="col-xs-12" v-show="commentList.length>0" style="display:none;border-bottom:0px;">
  <li v-for="comment in commentList">
    <table class="tourist-table">
      <tbody>
        <commentDetail :comment="comment"></commentDetail>
      </tbody>
    </table>
    <div class="line"></div>
  </li>
</div>
</template>

<script>
import commentDetail from './comment-detail.vue'

export default {
  props: ['commentList'],
  components: {
    commentDetail,
  },
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
