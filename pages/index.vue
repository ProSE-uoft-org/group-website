<script setup lang="ts">
import type { PersonSchema } from "~/utils/types";

useHead({
  title: "UofT PLSE Group",
});

// Member files in content/1.members are only used as data for this page.
function useMembers(group: string, sortBy: Record<string, 1 | -1>) {
  return useAsyncData(group, () =>
    queryContent("members", group)
      .only(["name", "description", "avatar", "website", "year"])
      .sort(sortBy)
      .find() as Promise<PersonSchema[]>
  );
}

const { data: facultyMembers } = await useMembers("faculty", { name: 1 });
const { data: postDocMembers } = await useMembers("staff-and-postdoc", { name: 1 });
const { data: gradStudents } = await useMembers("grad-student", { name: 1 });
const { data: alumnis } = await useMembers("alumni", { year: -1 });
</script>
<template>
  <div class="flex justify-center px-4 py-10">
    <div class="max-w-screen-lg">
      <h1 class="text-4xl font-bold">
        University of Toronto PLSE Group
      </h1>
      <h2 class="text-3xl mt-10">Faculty</h2>
      <PeopleList :people="facultyMembers ?? []" />
      <h2 class="text-3xl mt-10">Staff and Post Doc</h2>
      <PeopleList :people="postDocMembers ?? []" />
      <h2 class="text-3xl mt-10">Grad Student</h2>
      <PeopleList :people="gradStudents ?? []" />
      <h2 class="text-3xl mt-10">Alumni</h2>
      <AlumniList class="mt-3" :people="alumnis ?? []" />
    </div>
  </div>
</template>
