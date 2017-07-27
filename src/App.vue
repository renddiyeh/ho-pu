<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: sans-serif;
}

body {
  margin: 0;
}

#app {
  min-height: 100%;
}
</style>
