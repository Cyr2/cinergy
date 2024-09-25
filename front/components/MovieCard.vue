<template>
  <li
    v-if="data.movie_data && data.movie_data[0] && !data.movie_data.result"
    class="flex flex-col gap-2"
  >
    <div class="flex">
      <NuxtImg
        :src="`https://assets.cineville.fr/files/images/${data.movie_data[0].affichette}`"
        class="rounded-l-md w-56 h-80 object-cover"
      />
      <div class="px-8 py-6">
        <h2 class="flex flex-col gap-2 text-2xl font-bold">
          {{ data.titre_cotecine }}
        </h2>
        <ul>
          <li>Réalisateur : {{ data.movie_data[0].realisateurs }}</li>
          <li>Casting : {{ data.movie_data[0].acteurs }}</li>
          <li>Genre : {{ data.movie_data[0].genreprincipal }}</li>
          <li>Durée : {{ data.movie_data[0].duree }}</li>
        </ul>
        <p class="my-6 text-ellipsis">
          {{ data.movie_data[0].synopsis }}
        </p>
      </div>
    </div>
    <div class="flex gap-1">
      <p class="w-56 py-1.5 text-lg bg-blue-600 text-white flex items-center justify-center rounded-md">
        {{ cine.name }}
      </p>
      <ul class="flex">
        <li
          v-for="showtime in data.dates[0].showtimes"
          :key="showtime.id_seance"
        >
          {{ showtime.heure }} {{ showtime.version }}
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
    }
  }
};
</script>
