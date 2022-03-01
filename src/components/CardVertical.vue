<script setup>
import {defineProps, defineEmits} from "vue";
import ToastSuccess from "@/components/Toast/ToastSuccess";

defineEmits(['close', 'open'])
defineProps({
  image: String,
  title: String,
  description: String,
  link: String,
  isToastOpen: Boolean,
  isDisabled: String
});
</script>

<template>
  <ToastSuccess v-show="isToastOpen" @close="$emit('close')"></ToastSuccess>

  <div class="bg-white flex flex-col w-80 h-fit rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 duration-300 transform hover:scale-105" id="card">
    <div>
      <img class="rounded-t-lg w-full " :src="require(`@/assets/images/image_project/${image}`)" alt="" />
    </div>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{description}}
      </p>
      <div class="text-right">
        <button @click="$emit('open', link)" :disabled="isDisabled" :class="[isDisabled ? 'bg-gray-500': 'bg-blue-500 hover:bg-blue-800' ]"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <i class="fa-solid fa-copy mr-2"></i>Copy github link
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>