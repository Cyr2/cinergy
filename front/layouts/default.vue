<template>
  <main class="flex flex-col items-center justify-between gap-12 min-h-screen">
    <DefaultHeader />
    <div>
      <slot />
    </div>
    <DefaultFooter />
  </main>
</template>

<script setup lang="ts">
import DefaultHeader from "@/components/Header.vue";
import DefaultFooter from "@/components/Footer.vue";
</script>
