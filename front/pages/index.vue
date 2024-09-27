<template>
  <div>
    <div
      v-if="loaded"
      class="px-52 max-2xl:px-[10vw] max-md:px-10"
    >
      <div
        v-if="selectedMovieVideoId"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:w-screen before:h-screen before:bg-black before:bg-opacity-80 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2"
      >
        <div class="relative">
          <ScriptYouTubePlayer
            :video-id="selectedMovieVideoId"
            trigger="immediate"
          />
          <button
            class="bg-blue-600 absolute -top-16 -right-16 flex rounded-2xl"
            @click="handleSelectMovie()"
          >
            <Icon
              name="material-symbols:close-small"
              size="55"
              class="bg-white"
            />
          </button>
        </div>
      </div>
      <PagesMoviesDayMovies
        :data="movies"
        :date="20240930"
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

const selectedMovieVideoId = ref<string | null>(null);

const handleSelectMovie = (videoId: string | null) => {
  if (videoId === null) {
    selectedMovieVideoId.value = null;
  }
  else {
    selectedMovieVideoId.value = videoId;
  }
};
</script>
