<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { PersonSchema } from "~/utils/types";

defineProps<{ people: Array<PersonSchema & ParsedContent> }>();
</script>
<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4">
      <Person
        v-for="person in people"
        :key="person.name"
        :name="person.name"
        :avatar="person.avatar"
        :website="person.website || person._path"
      />
    </div>
  </div>
</template>
