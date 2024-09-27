<template>
  <div>
    <button
      v-for="day in days"
      :key="day"
      class="w-20 h-28 rounded-2xl hover:drop-shadow-blueShadow hover:bg-blue-600 hover:text-white"
      :class="day"
      @click="handleDate(day)"
    >
      {{ day.getDate() }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Calendar",
  props: {
    date: {
      type: Number,
      required: true
    },
    handleDate: {
      type: Function,
      required: true
    }
  },
  setup() {
    const currentDate = new Date();
    const days = [currentDate];
    for (let i = 1; i <= 6; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      days.push(date);
    }

    return {
      days
    };
  }
};
</script>
