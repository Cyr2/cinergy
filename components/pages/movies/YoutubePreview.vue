<template>
  <div
    class="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:w-[calc(100vw_+_1rem)] before:h-[calc(100vh_+_1rem)] before:bg-black before:bg-opacity-80 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2"
  >
    <div class="relative">
      <ScriptYouTubePlayer
        :video-id="videoId"
        trigger="immediate"
        :width="850"
      />
      <button
        class="bg-blue-600 absolute -top-16 -right-16 flex rounded-2xl hover:drop-shadow-blueShadow"
        @click="handleSelectMovie(null)"
      >
        <Icon
          name="material-symbols:close-small"
          size="55"
          class="bg-white"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "YoutubePreview",
  props: {
    videoId: {
      type: String,
      required: true
    },
    handleSelectMovie: {
      type: Function,
      required: true
    }
  }
};
</script>
