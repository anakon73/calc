<script setup lang="ts">
import { Search } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-center gap-2.5">
    <Search class="size-4 text-[#BCBCCB]" />
    <input
      type="text"
      class="
        w-72 rounded-md border-0 text-sm

        focus:outline-0
      "
      placeholder="Search transactions, invoices or help"
    >
  </div>
</template>
