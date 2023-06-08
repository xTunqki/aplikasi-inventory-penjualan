<script setup>
defineProps({
  title: String,
  backRoute: String,
});
</script>

<template>
  <header class="bg-gray-800 hover:bg-gray-600 text-white py-4">
  <div class="container mx-auto px-4 flex items-center justify-between">
    <div class="flex items-center mx-auto">
      <button class="mr-4" v-if="backRoute">
        <router-link :to="backRoute">
        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        </router-link>
      </button>
      <h1 class="text-2xl font-bold text-center text-sm">
        {{ title }}
      </h1>
    </div>
  </div>
</header>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
