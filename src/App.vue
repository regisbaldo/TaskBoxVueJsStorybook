<template>
  <div id="app">
    <task-list />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import store from './store';
export default {
  name: "App",
  store,
  components: {
    TaskList
  }
};
</script>

<style>
@import './index.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
