<template>
<<<<<<< HEAD
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/detail">Detail</router-link>
  </nav>
  <router-view />
=======
  <div class="container mx-auto px-4 h-screen">
    <router-view name="main"></router-view>
  </div>
>>>>>>> 36ebcbd6ecd85b1dd7b9f66f1b050484d55aad6c
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
</style>
