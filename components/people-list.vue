<script setup lang="ts">
import { PersonSchema } from "~/utils/types";

defineProps<{ people: PersonSchema[] }>();
</script>
<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3">
      <Person
        v-for="person in people"
        :key="person.name"
        :name="person.name"
        :avatar="person.avatar"
        :website="person.website"
      />
    </div>
  </div>
</template>
