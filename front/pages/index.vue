<template>
  <div>
    <div v-if="loaded">
      <DayMovies
        :data="movies"
        :date="20240925"
      />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovies } from "@/utils/fetchMovies.ts";

const { movies, loaded } = useMovies();
</script>
