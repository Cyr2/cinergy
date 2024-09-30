<template>
  <ul class="flex justify-end gap-1 w-full flex-wrap max-lg:justify-center">
    <li
      v-for="day in days"
      :key="day"
    >
      <button
        class="max-sm:w-16 max-sm:h-20 max-sm:text-sm w-24 h-28 rounded-xl flex flex-col items-center justify-center transition duration-75 hover:drop-shadow-blueShadow hover:bg-blue-600 hover:text-white"
        :class="formatDate(day) === date ? 'bg-blue-600 text-white drop-shadow-blueShadow' : 'bg-white'"
        @click="handleDate(day)"
      >
        <span>{{ day.toLocaleDateString(undefined, { weekday: 'short' }) }}</span>
        <span class="text-5xl font-bold max-sm:text-xl">{{ day.getDate() }}</span>
        <span>{{ day.toLocaleDateString(undefined, { month: 'short' }) }}</span>
      </button>
    </li>
  </ul>
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
    },
    formatDate: {
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
