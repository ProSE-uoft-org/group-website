<!-- Aluni are listed differently, no avatar will be displayed -->
<script setup lang="ts">
import { PersonSchema } from "~/utils/types";

defineProps<{ people: PersonSchema[] }>();
function computeContent(person: PersonSchema) {
  return `${person.name} (${person.year}, ${person.description})`;
}
</script>
<template>
  <ul class="pl-5">
    <li v-for="(person, idx) in people" :key="idx" class="list-disc">
      <a
        v-if="person.website"
        :href="person.website"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        {{ computeContent(person) }}
      </a>
      <span v-else>{{ computeContent(person) }}</span>
    </li>
  </ul>
</template>
