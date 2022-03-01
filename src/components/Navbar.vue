<script setup>
  import {ref} from "vue";
  import mycv from '../assets/documents/mycv/cv.json';
  let isMobile = ref(false);
  let stickyNavbar = ref(false);

  function toggleMobileMenu(){
    isMobile.value = !isMobile.value;
  }

  window.addEventListener("load", function() {
    const collection = document.getElementsByClassName('download-my-cv');
    for (let i = 0; i < collection.length; i++) {
      collection[i].setAttribute('href', mycv.content)
    }
  });

  window.addEventListener("resize", () => {
    (window.innerWidth > 768) ? isMobile.value = false : true;
  })

  window.addEventListener("scroll", () => {
    (window.scrollY !== 0) ? stickyNavbar.value = true : stickyNavbar.value = false;
  })

</script>

<template>
  <nav :class="[stickyNavbar? 'border-gray-200 shadow-md fixed bg-white z-50' : 'absolute z-20',{'z-10 bg-white': isMobile} ]" class="w-screen pl-0 pr-7 py-2.5 rounded sm:px-4 dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <img src="../assets/mimo.png" alt="" class="h-20 w-22">
      <div class="flex md:order-2 z-40">
        <a href="" id="" download="CV_Quentin_MIMAULT.pdf" class="download-my-cv text-white cursor-pointer hidden md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-6 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Download my CV
        </a>
        <button @click="toggleMobileMenu" data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div :class="[!isMobile ? 'hidden' : 'z-10']" class="justify-between items-center w-full bg-white rounded p-5 md:bg-transparent md:flex md:w-auto md:order-1" id="mobile-menu-4">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#home" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Contact
            </a>
          </li>
          <li class="text-center mt-3">
            <a href="" download="CV_Quentin_MIMAULT.pdf" class="download-my-cv text-white md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-6 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Download my CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>