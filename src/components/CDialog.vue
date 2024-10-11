<script setup lang="ts">
import { XCircle } from 'lucide-vue-next'
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot } from 'reka-ui'

defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <DialogRoot :open="open">
    <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-30 bg-black/20"
        @click="$emit('close')"
      />
      <DialogContent
        class="
          fixed left-[50%] top-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-72
          translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px]
        "
      >
        <button @click="$emit('close')">
          <XCircle class="absolute right-2 top-2 size-6 text-[#A4AFB7]/40" />
        </button>
        <slot />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style>
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(50%) sepia(13%) hue-rotate(130deg)  contrast(50%);
}
</style>
