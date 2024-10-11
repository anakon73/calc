<script lang="ts" setup>
import CHeader from './CHeader.vue'
import CNavbar from './CNavbar.vue'
</script>

<template>
  <div class="flex">
    <CNavbar />
    <div class="relative w-full">
      <CHeader class="absolute w-full" />
      <slot />
    </div>
  </div>
</template>
