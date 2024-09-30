<template>
  <div>
    <ul
      v-if="loaded && filteredMovies.length > 0"
      class="flex flex-col gap-6 max-md:gap-10"
    >
      <PagesMoviesMovieCard
        v-for="movie in filteredMovies"
        :key="movie.visa"
        :data="movie"
        :cine="{ name: 'Cineville' }"
        :handle-select-movie="handleSelectMovie"
      />
    </ul>
    <div
      v-else-if="!loaded"
      class="text-center"
    >
      Chargement des films en cours...
    </div>
    <div
      v-else
      class="text-center"
    >
      Oops.. Aucun film n'est disponible pour cette date.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DayMovies",
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      required: true
    },
    date: {
      type: Number,
      required: true,
    },
    handleSelectMovie: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const filteredMovies = computed(() => {
      return props.data
        .map((movie) => {
          const filteredDates = movie.dates.filter((dateObj) => {
            return dateObj.date === props.date;
          });
          if (filteredDates.length > 0) {
            return {
              ...movie,
              dates: filteredDates
            };
          }
          return null;
        })
        .filter(movie => movie !== null);
    });

    const loaded = ref(true);

    return {
      loaded,
      filteredMovies
    };
  }
};
</script>
