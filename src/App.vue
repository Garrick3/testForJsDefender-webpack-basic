<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <p>Welcome to use the Vue3 + Webpack basic project!</p>
    <button @click="count++">Click count: {{ count }}</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const message = ref('Hello Vue3!');
    const count = ref(0);

    return {
      message,
      count
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #42b983;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
}

button:hover {
  background-color: #359268;
}
</style>
