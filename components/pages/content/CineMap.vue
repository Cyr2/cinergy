<template>
  <div
    v-if="center && loaded"
    class="rounded-xl overflow-hidden z-30"
  >
    <LMap
      v-model:zoom="zoom"
      :style="{ height: '350px' }"
      :min-zoom="5"
      :inertia-max-speed="100"
      :center="center"
      :use-global-leaflet="false"
      @moveend="updateVisibleCine"
      @zoomend="updateVisibleCine"
    >
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker
        v-if="center !== defaultCenter"
        :lat-lng="center"
      >
        <LPopup>
          <h2>Your position</h2>
        </LPopup>
        <LIcon>
          <div class="rounded-full bg-green-600 p-2.5 border-white border-4 -translate-x-2 drop-shadow-greenShadow hover:border-green-600 hover:bg-white" />
        </LIcon>
      </LMarker>
      <LMarker
        v-for="currentCine in visibleCine"
        :key="`${currentCine.latitude}-${currentCine.longitude}-${currentCine.nom}`"
        :lat-lng="[currentCine.latitude, currentCine.longitude]"
      >
        <LPopup>
          <h2>{{ currentCine.nom }}</h2>
          <p>{{ currentCine.commune }}</p>
        </LPopup>
        <LIcon>
          <div class="rounded-full bg-blue-600 p-2.5 border-white border-4 -translate-x-2 drop-shadow-blueShadow hover:border-blue-600 hover:bg-white" />
        </LIcon>
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
const zoom = ref(16);
const visibleCine = ref([]);
const largeCineNames = ["Pathé", "UGC", "Gaumont", "CGR", "Kinepolis"];

const updateVisibleCine = () => {
  if (zoom.value >= 8) {
    visibleCine.value = cine.value;
  }
  else {
    visibleCine.value = filterCineByCity(cine.value, 1);
  }
};

const filterCineByCity = (cineList, maxCinePerCity) => {
  const cityMap = new Map();
  cineList.forEach((cine) => {
    if (largeCineNames.some(name => cine.nom.includes(name))) {
      if (cine.commune === "Paris") {
        if (!cityMap.has("Paris")) {
          cityMap.set("Paris", [cine]);
        }
      }
      else {
        if (!cityMap.has(cine.commune)) {
          cityMap.set(cine.commune, []);
        }
        if (cityMap.get(cine.commune).length < maxCinePerCity) {
          cityMap.get(cine.commune).push(cine);
        }
      }
    }
  });
  return Array.from(cityMap.values()).flat();
};


watch(zoom, updateVisibleCine);
watch(cine, updateVisibleCine);

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

.leaflet-control-zoom {
  border-radius: 0.5rem !important;
  overflow: hidden !important;
  border: 2px solid rgba(0, 0, 0, 0.20) !important;

  .leaflet-control-zoom-in, .leaflet-control-zoom-out {
    background-color: #0047e1 !important;
    color: white !important;
  }
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
