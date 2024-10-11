<script setup lang="ts">
import { ref, watch } from 'vue'
import type { DateValue } from '@internationalized/date'

import DatePicker from './DatePicker.vue'
import CInput from './CInput.vue'
import CDialog from './CDialog.vue'

defineProps<{ open: boolean }>()
defineEmits<{
  (e: 'close'): void
  (
    e: 'create',
    value: { title: string, start: string, end: string }
  ): void
}>()

const title = ref('')
const date = ref<DateValue>()
const start = ref('')
const end = ref('')

watch(open, () => {
  title.value = ''
  date.value = undefined
  start.value = ''
  end.value = ''
})
</script>

<template>
  <CDialog :open="open" @close="$emit('close')">
    <form
      class="space-y-4"
      @submit.prevent="$emit(
        'create',
        {
          title,
          start: `${date} ${start}`,
          end: `${date} ${start}`,
        },
      )"
    >
      <CInput
        v-model="title"
        required
        maxlength="30"
        label="event name"
      />
      <DatePicker v-model="date" required />
      <CInput
        v-model="start"
        type="time"
        required
        label="event time start"
      />
      <CInput
        v-model="end"
        :min="start"
        required
        type="time"
        label="event time end"
      />
      <div class="flex items-center justify-between">
        <button type="button" class="uppercase text-red-600">
          Cancel
        </button>
        <button type="submit" class="uppercase text-[#A4AFB7]">
          Save
        </button>
      </div>
    </form>
  </CDialog>
</template>

<style>
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(50%) sepia(13%) hue-rotate(130deg)  contrast(50%);
}
</style>
