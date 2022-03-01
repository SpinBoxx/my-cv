<template>
  <navbar></navbar>
  <home></home>
  <aboutme></aboutme>
  <projects></projects>
</template>

<script>
import Aboutme from "./template/aboutme";
import Home from "./template/home";
import Navbar from "../components/Navbar";
import Projects from "@/page/template/projects";

export default {
  name: "homepage",
  components: {
    Projects,
    Home,
    Aboutme,
    Navbar
  }

}
</script>

<style scoped>

</style>