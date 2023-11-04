<script setup lang="ts">
defineProps<{ url: string }>();
</script>
<template>
  <a :href="url" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ url }}</a>
</template>
