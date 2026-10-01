<script setup lang="ts">
import type { PersonSchema } from "~/utils/types";
defineProps<{ people: PersonSchema[] }>();
</script>
<template>
  <div class="grid grid-cols-2 md:grid-cols-4">
    <Person
      v-for="person in people"
      :key="person.name"
      :name="person.name"
      :avatar="person.avatar"
      :website="person.website"
    />
  </div>
</template>
