<template>
  <navbar></navbar>
  <home></home>
  <aboutme></aboutme>
</template>

<script>
import Aboutme from "./template/aboutme";
import Home from "./template/home";
import Navbar from "../components/navbar";

export default {
  name: "homepage",
  components: {
    Home,
    Aboutme,
    Navbar
  }

}
</script>

<style scoped>

</style>