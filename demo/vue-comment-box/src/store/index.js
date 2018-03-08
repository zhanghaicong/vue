import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

Vue.use(Vuex)

// initial state
const state = {
  headerData: {
    title: 'comment-box',
    links: [{
      title: 'demo',
      href: 'https://zhanghaicong.github.io/'
    }, {
      title: 'project',
      href: 'https://github.com/zhanghaicong/vue/tree/master/demo/comment-box'
    }]
  },
  user: localStorage['user']==''?'小硫酸铜':localStorage['user'],
  commentList: []
}

// getters
const getters = {
  //commentList: state => state.commentList
}

// actions
const actions = {
  changeUser({
    commit
  }, user) {
    commit(types.CHANGE_USER, user);
  },
  getCommentList({
    commit
  }) {
    commit(types.GET_COMMENT_LIST);
  },
  comment({
    commit
  }, content) {
    commit(types.COMMENT, content);
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
    console.log(state.user);
    localStorage['user'] = state.user;
  },
  [types.GET_COMMENT_LIST](state) {
    if (localStorage['commentList'] && JSON.parse(localStorage['commentList']) instanceof Array) {
      state.commentList = JSON.parse(localStorage['commentList']);
    }
  },
  [types.COMMENT](state, content) {
    const id = state.commentList.length > 0 ? parseInt(state.commentList[state.commentList.length - 1].id) + 1 : 1;
    const comment = {
      id: id,
      user: state.user,
      content: content,
      time: parseInt(new Date().getTime() / 1000),
      like: [],
      hate: [],
    };
    state.commentList.push(comment);
    localStorage['commentList'] = JSON.stringify(state.commentList);
    console.log(JSON.stringify(state.commentList));
  },
  [types.DELETECOMMENT](state, id) {
    for (let i = 0; i < state.commentList.length; i++) {
      if (state.commentList[i].id == id) {
        state.commentList.splice(i, 1);
        localStorage['commentList'] = JSON.stringify(state.commentList);
        break;
      }
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
