<template>
  <li
    v-if="data.movie_data && data.movie_data[0] && !data.movie_data.result"
    class="flex flex-col gap-2"
  >
    <div class="rounded-md flex h-80 max-md:flex-col max-md:h-full max-md:gap-2 overflow-hidden">
      <div>
        <div
          class="relative w-56 h-full max-md:w-full cursor-pointer after:transition-opacity hover:after:opacity-100 after:opacity-0 after:content-['Click_to_launch_the_trailer'] after:flex after:items-center after:justify-center after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:text-white after:text-sm after:z-10 after:bg-black after:bg-opacity-50"
          @click="handleSelectMovie(data.movie_data[0].video_id)"
        >
          <NuxtImg
            :src="`https://assets.cineville.fr/files/images/${data.movie_data[0].affichette}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="px-8 py-6 h-full flex flex-col items-start max-md:p-0">
        <h2 class="flex flex-col gap-2 text-2xl font-bold">
          {{ data.titre_cotecine }}
        </h2>
        <ul class="text-lg mb-6 max-lg:text-base">
          <li>Réalisateur : {{ data.movie_data[0].realisateurs }}</li>
          <li>Casting : {{ data.movie_data[0].acteurs }}</li>
          <li>Genre : {{ data.movie_data[0].genreprincipal }}</li>
          <li>Durée : {{ data.movie_data[0].duree }}</li>
        </ul>
        <p class="text-ellipsis overflow-y-hidden max-h-full text-lg max-lg:text-base">
          {{ data.movie_data[0].synopsis }}
        </p>
      </div>
    </div>
    <div class="flex gap-x-8 gap-y-2 max-md:flex-col">
      <p class="w-56 py-1.5 text-lg bg-blue-600 text-white flex items-center justify-center rounded-md max-md:w-full">
        {{ cine.name }}
      </p>
      <ul class="flex gap-2">
        <li
          v-for="showtime in data.dates[0].showtimes"
          :key="showtime.id_seance"
          class="flex"
        >
          <a
            :href="`https://pontlabbe.cineville.fr/vad/${showtime.id_cinema}/${showtime.id_seance}/${showtime.id_bordereau}`"
            class="py-1.5 text-lg text-blue-600 rounded-md px-4 shadow-[inset_0_0_0_2px_rgba(37,99,235)] hover:drop-shadow-blueShadow text-center bg-white"
          >{{ showtime.heure }} - {{ showtime.version }}</a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "MovieCard",
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      required: true
    },
    cine: {
      type: Object,
      required: false,
    },
    handleSelectMovie: {
      type: Function,
      required: true
    }
  }
};
</script>
