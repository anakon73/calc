<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps<{ label: string }>()

const vModel = defineModel()
</script>

<template>
  <div>
    <label class="text-sm text-[#A4AFB7]">
      {{ label }}
    </label>
    <input
      v-model="vModel"
      :="$attrs"
      class="
        w-full border-b border-[#A4AFB7] bg-white p-1 text-[#A4AFB7]

        focus:outline-none
      "
    >
  </div>
</template>
