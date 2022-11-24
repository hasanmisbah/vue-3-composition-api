<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView/>
  
  <footer id="footer">
    {{ store.name }}
  </footer>
</template>

<script setup>
import { store } from '@/composables/composable';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  padding: 20px;
  margin: 20px 0;
  background-color: #013243;
  color: #fff;
}
</style>
