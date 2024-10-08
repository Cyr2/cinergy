<template>
  <div
    v-if="center && loaded"
    class="rounded-xl overflow-hidden z-30"
  >
    <LMap
      :style="{ height: '350px' }"
      :zoom="16"
      :min-zoom="5"
      :inertia-max-speed="100"
      :center="center"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker
        v-for="currentCine in cine"
        :key="currentCine.id"
        :lat-lng="[currentCine.lattitude, currentCine.longitude]"
      >
        <LPopup>
          <h2>{{ currentCine.name }}</h2>
          <p>{{ currentCine.city }}</p>
        </LPopup>
        <LIcon><div class="rounded-full bg-blue-600 p-2.5 border-white border-4 -translate-x-2 drop-shadow-blueShadow hover:border-blue-600 hover:bg-white" /></LIcon>
      </LMarker>
    </LMap>
  </div>
  <div v-else>
    Loading cine...
  </div>
</template>

<script lang="ts" setup>
import { LMap, LMarker, LTileLayer, LPopup, LIcon } from "@vue-leaflet/vue-leaflet";
import { useCine } from "@/utils/fetchCine.ts";

const { cine, loaded } = useCine();
const defaultCenter = [47.86592, -4.2208461];

const center = ref<[number, number] | null>(null);

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        center.value = [position.coords.latitude, position.coords.longitude];
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          default:
            console.error("An unknown error occurred.");
            break;
        }
        center.value = defaultCenter;
      }
    );
  }
  else {
    console.error("Geolocation is not supported by this browser.");
    center.value = defaultCenter;
  }
});
</script>

<style lang="scss">
.leaflet-control-attribution {
  display: none;
}
.leaflet-popup-content {
  text-align: center;
  div p {
    margin: 0;
  }
}
.leaflet-marker-icon {
  border: none;
  background: none;
}
</style>
