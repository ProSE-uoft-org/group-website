<script setup lang="ts">
defineProps<{ name: string; avatar?: string; website?: string }>();
</script>
<template>
  <UCard>
    <div class="flex justify-center">
      <NuxtLink class="flex flex-col" :href="website" target="_blank">
        <!-- <NuxtImg v-if="avatar" :src="avatar" class="grow rounded-md" /> -->
        <img v-if="avatar" :src="avatar" alt="" class="max-h-52 rounded-lg" />
        <img v-else src="/person-placeholder.jpeg" alt="" class="max-h-52 rounded-lg" />
        <!-- <NuxtImg v-if="avatar" :src="avatar" alt="" class="max-h-52 rounded-md" /> -->
        <p class="text-center">
          {{ name }}
        </p>
      </NuxtLink>
    </div>
  </UCard>
</template>
