import Vue from 'vue'
import Vuex from 'vuex'

import store from './store'
import App from './App.vue'

/**
const store = new Vuex.Store({
  state: {
    todoList: [],
    doneList: []
  },
  mutations: {
    add(state, payload) {
      state.todoList.push(payload.task);
    },
    removeFromTodo(state, payload) {
      state.todoList.splice(payload.index, 1);
    },
  },
  actions: {
    add({
      commit
    }, payload) {
      commit('add', {
        task: payload.task
      });
    },
    removeFromTodo({
      commit
    }, payload) {
      commit('removeFromTodo', {
        index: payload.index
      });
    }
  }
})
**/

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
