<template>
  <div id="app">
    <div class="header">To Do List</div>
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          title: 'Study algorithms',
          done: false,
        },
        {
          title: 'Do research - Jest testing',
          done: true,
        },
        {
          title: 'Write Medium article',
          done: false,
        },
        {
          title: 'Listen to Code Newbie podcast',
          done: false,
        },
      ],
    };
  },
};
</script>
