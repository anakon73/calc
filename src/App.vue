<script setup lang="ts">
import CCalendar from './components/CCalendar.vue'
import CLayout from './components/CLayout.vue'
</script>

<template>
  <CLayout>
    <div class="size-full bg-gray-100 pb-24 pl-16 pr-24 pt-40">
      <h1 class="mb-8 text-3xl text-[#43425D]">
        Calendar
      </h1>
      <CCalendar />
    </div>
  </CLayout>
</template>
