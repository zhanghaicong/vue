import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

Vue.use(Vuex)

// initial state
const state = {
  todoList: [],
  doneList: []
}

// getters
const getters = {
  todoList: state => state.todoList
}

// actions
const actions = {
  addToTodo({
    commit
  }, task) {
    commit(types.ADD_TO_TODO,
      task
    )
  }
}

// mutations
const mutations = {
  [types.ADD_TO_TODO](state, task) {
    state.todoList.push(task);
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
