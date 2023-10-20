<script setup lang="ts">
// import {useAlumniQuery}
const facultyMembers = await useAllFacultyMemberQuery()
  .sort({ name: 1 })
  .find();
const postDocMembers = await useAllPostDocQuery().sort({ name: 1 }).find();
const gradStudents = await useAllGradStudentQuery().sort({ name: 1 }).find();
const alumnis = await useAllAlumniQuery().sort({ name: 1 }).find();
</script>
<template>
  <div class="flex justify-center">
    <div class="max-w-screen-lg">
      
      <!-- <img src="/UofT.jpeg" /> -->
      <h1 class="text-ut text-4xl font-bold">PLSE Group</h1>
      <h2 class="text-3xl mt-10">Faculty</h2>
      <PeopleList :people="facultyMembers" />
      <h2 class="text-3xl mt-10">Post Doc</h2>
      <PeopleList :people="postDocMembers" />
      <h2 class="text-3xl mt-10">Grad Student</h2>
      <PeopleList :people="gradStudents" />
      <h2 class="text-3xl mt-10">Alumni</h2>
      <PeopleList :people="alumnis" />
    </div>
  </div>
</template>
