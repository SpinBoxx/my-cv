<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header class="w-full top-0">
    <Navbar></Navbar>
  </header>

  <RouterView />
</template>

<style>
#app {
  font-weight: normal;
}
</style>
