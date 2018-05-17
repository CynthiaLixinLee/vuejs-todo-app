// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';

// Vue.config.productionTip = false;

new Vue({
  // entry point of the app
  el: '.todoapp',
  data() {
    return {
      newTodo: '',
      todos: [{ id: 0, title: 'New Todo', completed: 'false' }],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ title: this.newTodo, completed: 'false', id: this.todos.length });
      this.newTodo = '';
    },
  },
});
