<template>
  <div class="bg-gradient-to-t from-blue-400 h-screen items-center flex flex-row mx-auto" id="aboutme">
    <div class="container flex flex-col mx-auto p-5 pt-20">
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
    <div class="hidden lg:container lg:block">
      <span class="lg:inset-full lg:left-0 lg:absolute">
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <ellipse stroke-width="0" ry="44.5" rx="45" id="svg_1" cy="494.5" cx="56.1" stroke="#000" fill="#4566ef"/>
          <ellipse stroke-width="0" ry="44.5" rx="45" id="svg_2" cy="382.5" cx="103.1" stroke="#000" fill="#4566ef"/>
          <ellipse stroke-width="0" ry="44.5" rx="45" id="svg_3" cy="420.5" cx="216.1" stroke="#000" fill="#4566ef"/>
          <ellipse stroke-width="0" ry="44.5" rx="45" id="svg_4" cy="536.5" cx="166.1" stroke="#000" fill="#4566ef"/>
        </g>
      </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutme"
}
</script>

<style scoped>

</style>