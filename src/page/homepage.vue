<template>
  <navbar></navbar>
  <home></home>
  <aboutme></aboutme>
  <projects></projects>
  <contact></contact>
</template>

<script>
import Aboutme from "./template/aboutme";
import Home from "./template/home";
import Navbar from "../components/Navbar";
import Projects from "@/page/template/projects";
import Contact from "@/page/template/contact";

export default {
  name: "homepage",
  components: {
    Projects,
    Home,
    Aboutme,
    Navbar,
    Contact
  }

}
</script>

<style scoped>

</style>