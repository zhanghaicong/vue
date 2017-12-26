<template>
<div class="container col-md-6 col-lg-4">
  <div class="jumbotron">
    <h1>vue-todo</h1>
    <a href="https://github.com/zhanghaicong">©zhanghaicong</a>
  </div>
  <form class="form-inline">
    <input type="text" class="form-control col-8 col-md-10" placeholder="Enter todo task" v-model.trim="task" maxlength="60">
    <button type="button" class="btn btn-primary col-4 col-md-2 cursor-pointer" @click="add">add</button>
  </form>
  <div id="to-do-list">
    <h5>
      <span>todo</span>
      <span class="badge badge-secondary">{{todoList.length}}</span>
    </h5>
    <ul class="list-group" v-show="todoList.length>0">
      <li class="list-group-item overflow-ellipsis form-inline" v-for="(todo,index) in todoList">
        <span class="cursor-pointer" @click="done(index)">{{todo}}</span>
        <span class="badge badge-secondary float-right cursor-pointer" @click="removeFromTodo(index)">X</span>
      </li>
    </ul>
  </div>
  <div id="have-do-list">
    <h5>
      <span>done</span>
      <span class="badge badge-secondary">{{doneList.length}}</span>
    </h5>
    <ul class="list-group" v-show="doneList.length>0">
      <li class="list-group-item overflow-ellipsis" v-for="(done,index) in doneList">
        <span class="cursor-pointer" @click="todo(index)">{{done}}</span>
        <span class="badge badge-secondary float-right cursor-pointer" @click="removeFromDone(index)">X</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      todoList: [],
      doneList: []
    }
  },
  methods: {
    add() {
      if (this.task != '') {
        this.todoList.push(this.task);
        this.task = '';
      }
    },
    todo(index) {
      this.todoList.push(this.doneList[index]);
      this.doneList.splice(index, 1);
    },
    done(index) {
      this.doneList.push(this.todoList[index]);
      this.todoList.splice(index, 1);
    },
    removeFromTodo(index) {
      this.todoList.splice(index, 1);
    },
    removeFromDone(index) {
      this.doneList.splice(index, 1);
    },
    updateLocalStorage() {
      localStorage['todo'] = JSON.stringify(this.todoList);
      localStorage['done'] = JSON.stringify(this.doneList);
    },
    initList() {
      this.todoList = JSON.parse(localStorage['todo']);
      this.doneList = JSON.parse(localStorage['done']);
    }
  },
  mounted() {
    this.initList();
  },
  updated() {
    this.updateLocalStorage();
  }
}
</script>

<style scope>
a:hover {
  text-decoration: none;
}

.cursor-pointer {
  cursor: pointer;
}

.float-right {
  float: right;
}

.overflow-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#to-do-list h5 .badge {
  margin-left: 3px;
}

li .badge {
  margin-top: 4px;
}

#to-do-list,
#have-do-list,
ul {
  margin-top: 20px;
}
</style>
