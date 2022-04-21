<script setup>
import Homepage from "./page/homepage";

let fontAwesomeScript = document.createElement('script')
fontAwesomeScript.setAttribute('src', 'https://kit.fontawesome.com/d4f53ef499.js')
fontAwesomeScript.setAttribute('crossorigin', 'anonymous')
document.head.appendChild(fontAwesomeScript)

fetch("https://mimo-cv-backend.herokuapp.com/symfony/1/php", {method: "POST"}).then(response => response.json()).then(data => {
  console.log(data['hydra:member'][0].numberClick)
}).catch(function(error){console.log(error)})
</script>




<template>
  <homepage></homepage>
</template>


<style>
@font-face {
  font-family: Comfortaa-semibold;
  src: url(./assets/fonts/Comfortaa-SemiBold.ttf);
}
@font-face {
  font-family: Comfortaa-bold;
  src: url(./assets/fonts/Comfortaa-Bold.ttf);
}

html {
  margin: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;
  min-height: 800px;
}
body{
  font-family: Comfortaa-semibold, sans-serif !important;
}



#app {

  /*font-family: Avenir, Helvetica, Arial, sans-serif;|*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  color: #2c3e50;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
