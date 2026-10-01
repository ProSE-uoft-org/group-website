<script setup lang="ts">
defineProps<{ name: string; avatar?: string; website?: string }>();
const config = useRuntimeConfig();

/**
 * When a subpath is used as base url, local paths used in this site will break, like links to avatars.
 * This function will fix it by adding baseUrl if it's a local path.
 */
function composeUrl(baseUrl: string, url: string): string {
  if (url.startsWith("/")) {
    // is a local file
    if (baseUrl.endsWith("/")) {
      return `${baseUrl.substring(0, baseUrl.length - 1)}${url}`;
    } else {
      return `${baseUrl}${url}`;
    }
  } else {
    // is a remote url
    return url;
  }
}
</script>
<template>
  <div class="flex justify-center p-5">
    <!-- Only people with a website are clickable -->
    <component
      :is="website ? 'a' : 'div'"
      class="flex flex-col"
      v-bind="website ? { href: website, target: '_blank', rel: 'noopener noreferrer' } : {}"
    >
      <div class="overflow-hidden relative h-52 w-40">
        <img
          :src="composeUrl(config.public.baseURL, avatar || '/person-placeholder.jpeg')"
          alt=""
          class="rounded-lg object-cover object-top w-full h-full"
        />
      </div>
      <p class="text-center">
        {{ name }}
      </p>
    </component>
  </div>
</template>
