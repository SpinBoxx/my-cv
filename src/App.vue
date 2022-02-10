<template>
  <homepage></homepage>
</template>

<script>

import Homepage from "./page/homepage";

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
@font-face {
  font-family: "Open Sans";
  /*src: url("") format("woff2"),*/
  /*url("/fonts/OpenSans-Regular-webfont.woff") format("woff");*/
}

html {
  margin: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;
}



#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
