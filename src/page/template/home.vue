<script>

  const svg = document.getElementById('svg-circle');
  // svg.attr
  window.addEventListener("resize", () => {
    console.log(svg);
    (window.innerWidth > 1368) ? svg.setAttribute('transform', 'scale(0.7)') : svg.setAttribute('height', '600');
  })
</script>

<template>
  <div class="bg-gradient-to-t from-blue-400 h-screen items-center flex flex-row mx-auto" id="home">
    <div class="container flex flex-col mx-auto p-5 pt-20 ">
      <div class="max-w-3xl">
        <span class="text-2xl">hello, i am</span>
        <h1 class="text-3xl font-bold tracking-wide">Quentin MIMAULT</h1>
        <span class="text-2xl mt-4 font-light">I'm a full stack developper</span>
        <br>
        <span>
        I am 22 years old,
        I live in Nantes in France
        I have a master in web development and project management,
        I have two professional experiences of one year during my alternations.
        I am comfortable in Symfony on the back-end and in VueJS on the front-end
      </span>
      </div>
    </div>
    <div class="hidden xl:block">
      <span class="lg:bottom-0 lg:right-0 lg:absolute">
      <svg width="491" height="490" viewBox="0 0 491 490" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg-circle">
      <circle cx="356.5" cy="356.5" r="356.5" fill="url(#paint0_linear_6:37)"></circle>
      <defs>
      <linearGradient id="paint0_linear_6:37" x1="356.5" y1="0" x2="356.5" y2="713" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4A6CF7"></stop>
      <stop offset="1" stop-color="#1E3BB3"></stop>
      </linearGradient>
      </defs>
      </svg>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>