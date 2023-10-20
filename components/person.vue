<script setup lang="ts">
defineProps<{ name: string; avatar?: string; website?: string }>();
</script>
<template>
  <div class="flex justify-center p-5">
    <NuxtLink class="flex flex-col" :href="website" target="_blank">
      <div class="img-container overflow-hidden relative h-52 w-40">
        <img
          v-if="avatar"
          :src="avatar"
          alt=""
          class="rounded-lg object-cover object-top w-full h-full"
        />
        <img
          v-else
          src="/person-placeholder.jpeg"
          alt=""
          class="rounded-lg object-cover object-top w-full h-full"
        />
      </div>
      <p class="text-center">
        {{ name }}
      </p>
    </NuxtLink>
  </div>
</template>
