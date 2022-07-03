<script setup>
import { ref } from "@vue/reactivity";
import mycv from '../assets/documents/mycv/cv.json';
const ANNEE_EXPERIENCE = 2;
const NB_PROJECTS = 10;
const HAPPY_CLIENT = 0;
const CORE_COMPETENCES = ref([
  { name: "Javascript" },
  { name: "PHP" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Vue.js" },
  { name: "React" },
  { name: "Symfony" },
  { name: "HTML" },
  { name: "Tailwind" },
  { name: "CSS" },
])
const OTHER_COMPETENCES = ref([
  { name: "PWA" },
  { name: "Responsive Web Design" },
  { name: "Méthode agiles" },
])

window.addEventListener("load", function() {
    const collection = document.getElementsByClassName('download-my-cv');
    for (let i = 0; i < collection.length; i++) {
      collection[i].setAttribute('href', mycv.content)
    }
  });
</script>

<template>
  <section id="introduction" data-aos="zoom-in" data-aos-duration="1000">
    <img
      src="https://thecodework.com/wp-content/uploads/2021/08/2517915.jpg-1024x1024.png"
      alt=""
    />
    <div class="font-normal text-2xl mt-2" id="test">
      <span>Hellooo</span>
    </div>
    <div class="flex flex-col gap-2 mt-4 text-3xl font-semibold tracking-wider">
      <span>Je suis Quentin MIMAULT</span>
      <span>DEVELOPPEUR FULL STACK</span>
      <span>A NANTES</span>
    </div>
  </section>

  <section id="stats" class="flex justify-start mt-8 flex-wrap gap-10" data-aos="fade-right">
    <div class="inline-grid">
      <span class="font-bold text-4xl text-blue-700" >
        <number ref="number1" :from="100" :to="ANNEE_EXPERIENCE" :format="theFormat" :duration="2.8" :delay="0" easing="Power1.easeOut" />
        +
      </span>
      
      <span class="font-thin tracking-wider text-gray-600">Experiences</span>
    </div>
    <div class="inline-grid">
      <number ref="number1" :from="0" :to="NB_PROJECTS" :format="theFormat" :duration="1.4" :delay="0" easing="Power1.easeOut" class="font-bold text-4xl text-blue-700" />
      <span class="font-thin tracking-wider text-gray-600">Projets</span>
    </div>
    <div class="inline-grid">
      <span class="font-bold text-4xl text-blue-700">{{ HAPPY_CLIENT }}</span>
      <span class="font-thin tracking-wider text-gray-600">Client heureux</span>
    </div>
  </section>

  <section id="a-propos" class="mt-8" data-aos="zoom-in" data-aos-duration="500">
    <div class="w-full mb-8">
      <p class="text-2xl border-b-4 border-blue-700 w-fit pb-1">A propos</p>
    </div>

    <span class="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum ante a porta
      blandit. Quisque velit tortor, ultricies in quam ut, luctus convallis metus. Nunc
      vitae felis rutrum, mattis justo quis, bibendum tellus. Integer bibendum eget dolor
      nec venenatis. Aliquam erat volutpat. Etiam et est vitae turpis accumsan vulputate.
      Curabitur et vehicula nisl, eu congue dolor. Vivamus nec hendrerit mi Nulla
      consequat tempor.
    </span>
    <div class="text-center mt-14">
      <a class="download-my-cv border-4 cursor-pointer border-blue-700 rounded-full px-4 py-2 text-blue-700 font-semibold duration-700 hover:bg-blue-700 hover:text-white tracking-wider" download="CV_Quentin_MIMAULT.pdf">
        Télécharger mon CV
      </a>
    </div>
  </section>

  <section id="core-skills" class="mt-10" data-aos="zoom-in" data-aos-duration="500">
    <div class="w-full mb-8">
      <p class="text-2xl border-b-4 border-blue-700 w-fit pb-1">Mes principales compétences</p>
    </div>
    <div class="flex flex-wrap gap-4">
      <span  v-for="(competence) in CORE_COMPETENCES" :key="competence.name" 
        class="border-2 border-gray-300 rounded-full px-4 py-2 text-gray-700 font-semibold duration-500 hover:bg-blue-700 hover:text-white tracking-wider hover:cursor-pointer">{{competence.name}}
      </span>
    </div>
  </section>

  <section id="other-skills" class="mt-8" data-aos="zoom-in" data-aos-duration="500">
    <div class="w-full mb-8">
      <p class="text-2xl border-b-4 border-blue-700 w-fit pb-1">Mes autres compétences</p>
    </div>
    <div class="flex flex-wrap gap-4">
      <span  v-for="(competence) in OTHER_COMPETENCES" :key="competence.name" 
        class="border-2 border-gray-300 rounded-full px-4 py-2 text-gray-700 font-semibold duration-500 hover:bg-blue-700 hover:text-white tracking-wider hover:cursor-pointer">{{competence.name}}
      </span>
    </div>
  </section>

  <section id="experiences" class="mt-8" data-aos="zoom-in" data-aos-duration="500">
    <div class="w-full mb-8">
      <p class="text-2xl border-b-4 border-blue-700 w-fit pb-1">Mes experiences</p>
    </div>
    <div class="flex flex-col">
      <div id="timeline">
        <span class="font-semibold text-md">2021 - Aujourd'hui</span>
      </div>
      <div id="company" class="mt-2">
        <span class="font-normal text-3xl text-slate-600 tracking-widest">Néo-soft</span>
      </div>
      <div id="job-title" class="mt-2">
        <span class="font-medium text-xl tracking-wider">Développeur full stack ASP.NET</span>
      </div>
      <div id="job-description" class="mt-6">
        <span class="tracking-wide text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut, congue enim. Sed fermentum.</span>
      </div>
      <div id="job-task" class="mt-5">
        <ul class="space-y-4">
          <li class="relative">
            <span class="before:content-[''] before:w-[0.65rem] before:h-[0.65rem] before:absolute before:bg-gray-800 before:left-0 before:rounded-full before:top-[0.4rem]"></span> 
            <span class="pl-7 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut.</span>  
          </li>
          <li class="relative">
            <span class="before:content-[''] before:w-[0.65rem] before:h-[0.65rem] before:absolute before:bg-gray-800 before:left-0 before:rounded-full before:top-[0.4rem]"></span> 
            <span class="pl-7 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem maximus, ornare metus ut.</span>  
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section id="my-projects" class="mt-8 pb-24">
    <div class="w-full mb-8">
      <p class="text-2xl border-b-4 border-blue-700 w-fit pb-1">Mes projets</p>
    </div>
  </section>
</template>

<style scoped></style>
