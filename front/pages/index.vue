<template>
  <div>
    <div v-if="loaded">
      <p
        v-for="movie in movies"
        :key="movie.visa"
      >
        {{ movie.titre_cotecine }}, {{ movie.visa }}
      </p>
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
