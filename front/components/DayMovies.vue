<template>
  <div>
    <ul
      v-if="loaded"
      class="flex flex-col gap-6"
    >
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.visa"
        :data="movie"
        :cine="{ name: 'Cineville' }"
      />
    </ul>
    <div v-else>
      Loading liste of movies...
    </div>
  </div>
</template>

<script>
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
  },
  setup(props) {
    const loaded = ref(true);

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

    return {
      loaded,
      filteredMovies
    };
  }
};
</script>
