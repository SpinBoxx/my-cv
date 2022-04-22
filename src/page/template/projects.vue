<script setup>
  import CardVertical from "@/components/CardVertical";
  import githubProjectLinks from '../../assets/documents/github_projects/link.json';
  import {ref, defineEmits} from "vue";

  const links = githubProjectLinks.links;

  const data = {}
  function clickProject(projectId){
    fetch("https://mimo-cv-backend.herokuapp.com/pnl/symfony/" + projectId +"/php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/ld+json"
      },
      body: JSON.stringify(data)
    })
  }

  let isToastOpen = ref(false);
  async function copyGithubLink(link) {
    try{
      await navigator.clipboard.writeText(link)
      isToastOpen.value = true;
    } catch ($e){
      alert('Cannot copy');
    }
  }
  function close(){
    isToastOpen.value = false;
  }
  defineEmits(['open', 'close'])
</script>

<template>
  <div class="bg-gradient-to-t from-blue-400 flex flex-row mx-auto lg:pb-32" id="projects">
    <div class="container flex flex-col mx-auto p-5 pt-40 pt-0 xl:w-3/5">
      <div class="text-center">
        <h1 class="font-Comfortaa-bold text-4xl">My projects</h1>
      </div>
      <div class="gap-16 flex flex-row h-auto my-auto flex-wrap justify-center mt-16">
        <CardVertical image="project3.png" title="My CV"
                      description="I wanted a website to introduce myself in a way that was a little more fun than a CV. It also shows what I'm capable of
                      doing without mock-ups. I remind you that I'm a back-end developer but also able to do front-end with mockups preferably 😉"
                      @click="clickProject" projectNumber="3" :link="links.project1" :isToastOpen="isToastOpen" @open="copyGithubLink" @close="close" :isDisabled="false" />

        <CardVertical image="project4.png" title="Loading project 2 incoming"
                      @click="clickProject(4)" projectNumber="4" description="This is a fictive description for my project 2" :isDisabled="true" :link="links.project2" :isToastOpen="isToastOpen" @open="copyGithubLink" @close="close"/>

        <CardVertical image="project1.jpg" title="Loading project 3 incoming"
                      description="This is a fictive description for my project 3" :isDisabled="true"
                      @click="clickProject(5)" projectNumber="5" :link=links.project3 :isToastOpen="isToastOpen" @open="copyGithubLink" @close="close"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>