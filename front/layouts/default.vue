<template>
  <main class="flex flex-col items-center justify-between gap-8 min-h-screen">
    <div>
      <slot />
    </div>
    <DefaultFooter />
  </main>
</template>

<script setup lang="ts">
import DefaultFooter from "~/components/Footer.vue";
</script>
