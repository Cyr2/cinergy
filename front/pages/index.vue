<template>
  <div>
    <div
      v-if="loaded"
      class="px-52 max-2xl:px-[10vw] max-md:px-10"
    >
      <PagesMoviesDayMovies
        :data="movies"
        :date="20240928"
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
