// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';

// Vue.config.productionTip = false;
const STORAGE_KEY = 'todo-storage';
function saveToStorage(x) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(x));
}

new Vue({
  // entry point of the app
  el: '.todoapp',
  data() {
    return {
      newTodo: '',
      todos: [],
      editedTodo: null,
      visibility: 'all',
    };
  },
  // Vue.js lifecycle hook to load from localStorage
  created() {
    this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  computed: {
    filteredTodos() {
      if(this.visibility === 'all') {
        return this.todos;
      } else if (this.visibility === 'active') {
          return this.todos.filter(todo => !todo.completed)
      } else {
          return this.todos.filter(todo => todo.completed)
      }
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ title: this.newTodo, completed: 'false', id: this.todos.length });
      this.newTodo = '';
      saveToStorage(this.todos);
    },
    editTodo(todo) {
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
      saveToStorage(this.todos);
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      saveToStorage(this.todos);
    },
  },
});
