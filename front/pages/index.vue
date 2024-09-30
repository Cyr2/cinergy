<template>
  <div class="h-full">
    <div
      v-if="loaded"
      class="w-screen px-52 max-2xl:px-[10vw] max-md:px-10 flex flex-col gap-5"
    >
      <PagesContentCalendar
        :date="selectedDate"
        :handle-date="handleSelectDate"
        :format-date="formatDate"
      />
      <hr class="h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-black border-none">
      <PagesContentDayMovies
        :data="movies"
        :date="selectedDate"
        :handle-select-movie="handleSelectMovie"
      />
      <PagesMoviesYoutubePreview
        v-if="selectedMovieVideoId"
        :video-id="selectedMovieVideoId"
        :handle-select-movie="handleSelectMovie"
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

const formatDate = (date: DateConstructor) => {
  return parseInt(date.toISOString().slice(0, 10).replace(/-/g, ""));
};

const handleSelectDate = (date: DateConstructor) => {
  selectedDate.value = formatDate(date);
};

const selectedDate = ref<number>(formatDate(new Date()));

const selectedMovieVideoId = ref<string | null>(null);

const handleSelectMovie = (videoId: string | null) => {
  selectedMovieVideoId.value = videoId;
};
</script>
