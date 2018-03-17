import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

// initial state
const state = {
  headerData: {
    title: 'vue-comment-box',
    links: [{
      title: 'demo',
      href: 'https://zhanghaicong.github.io/'
    }, {
      title: 'project',
      href: 'https://github.com/zhanghaicong/vue/tree/master/demo/vue-comment-box'
    }]
  },
  user: (localStorage['user'] == '' || localStorage['user'] == undefined) ? '小硫酸铜' : localStorage['user'],
  commentList: (localStorage['commentList'] && JSON.parse(localStorage['commentList']) instanceof Array) ? JSON.parse(localStorage['commentList']) : []
}

// getters
const getters = {
  commentListIsLike: state => {
    state.commentList.map(x => {
      x.isLike = new Set(x.like).has(state.user);
    });
    return state.commentList;
  }
}

// actions
const actions = {
  changeUser({
    commit
  }, user) {
    commit(types.CHANGE_USER, user);
  },
  comment({
    commit
  }, content) {
    commit(types.COMMENT, content);
  },
  likeOrNot({
    commit
  }, id) {
    commit(types.LIKEORNOT, id);
  },
  deleteComment({
    commit
  }, id) {
    commit(types.DELETECOMMENT, id);
  }
}

// mutations
const mutations = {
  [types.CHANGE_USER](state, user) {
    state.user = user == '' ? '小硫酸铜' : user;
    localStorage['user'] = state.user;
  },
  [types.COMMENT](state, content) {
    const id = state.commentList.length > 0 ? parseInt(state.commentList[state.commentList.length - 1].id) + 1 : 1;
    const comment = {
      id: id,
      user: state.user,
      content: content,
      time: parseInt(new Date().getTime() / 1000),
      like: [],
    };
    console.log(comment);
    state.commentList.push(comment);
    saveCommentList(state.commentList);
  },
  [types.DELETECOMMENT](state, id) {
    state.commentList.map((x, i) => {
      if (x.id == id) {
        state.commentList.splice(i, 1);
        return;
      }
    });
    saveCommentList(state.commentList);
  },
  [types.LIKEORNOT](state, id) {
    state.commentList.map((x) => {
      if (x.id == id) {
        let likeSet = new Set(x.like);
        likeSet.delete(state.user) ? x.like = [...likeSet] : x.like.push(state.user);
        return
      }
    });
    saveCommentList(state.commentList);
  }
}

const saveCommentList = commentList => {
  localStorage['commentList'] = JSON.stringify(commentList);
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
