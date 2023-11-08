<script setup lang="ts">
defineProps<{ name: string; avatar?: string; website: string }>();
const config = useRuntimeConfig();

/**
 * When a subpath is used as base url, relative paths used in this site will break, like links to avatar and markdown files.
 * This function will fix it by adding baseUrl if it's a local relative path link.
 */
function composeUrl(baseUrl: string, url: string): string {
  if (url.startsWith("/")) {
    // image is a local image
    if (baseUrl.endsWith("/")) {
      return `${baseUrl.substring(0, baseUrl.length - 1)}${url}`;
    } else {
      return `${baseUrl}${url}`;
    }
  } else {
    // is remote image
    return url;
  }
}

</script>
<template>
  <div class="flex justify-center p-5">
    <NuxtLink class="flex flex-col" :href="composeUrl(config.public.baseURL, website)" target="_blank">
      <div class="img-container overflow-hidden relative h-52 w-40">
        <img
          v-if="avatar"
          :src="composeUrl(config.public.baseURL, avatar)"
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
