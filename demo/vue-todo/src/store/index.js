import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

Vue.use(Vuex)

// initial state
const state = {
  todoList: JSON.parse(localStorage['todo']) instanceof Array ? JSON.parse(localStorage['todo']) : [],
  doneList: JSON.parse(localStorage['done']) instanceof Array ? JSON.parse(localStorage['done']) : []
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
  },
  todo({
    commit
  }, index) {
    commit(types.TODO,
      index
    )
  },
  done({
    commit
  }, index) {
    commit(types.DONE,
      index
    )
  },
  removeFromTodo({
    commit
  }, index) {
    commit(types.REMOVE_FROM_TODO,
      index
    )
  },
  removeFromDone({
    commit
  }, index) {
    commit(types.REMOVE_FROM_DONE,
      index
    )
  },
}

// mutations
const mutations = {
  [types.ADD_TO_TODO](state, task) {
    state.todoList.push(task);
    saveToLocalStorage(state);
  },
  [types.TODO](state, index) {
    state.todoList.push(state.doneList[index]);
    state.doneList.splice(index, 1);
    saveToLocalStorage(state);
  },
  [types.DONE](state, index) {
    state.doneList.push(state.todoList[index]);
    state.todoList.splice(index, 1);
    saveToLocalStorage(state);
  },
  [types.REMOVE_FROM_TODO](state, index) {
    state.todoList.splice(index, 1);
    saveToLocalStorage(state);
  },
  [types.REMOVE_FROM_DONE](state, index) {
    state.doneList.splice(index, 1);
    saveToLocalStorage(state);
  }
}

const saveToLocalStorage = state => {
  localStorage['todo'] = JSON.stringify(state.todoList);
  localStorage['done'] = JSON.stringify(state.doneList);
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
