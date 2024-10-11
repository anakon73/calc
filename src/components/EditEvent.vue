<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { type DateValue, parseDate } from '@internationalized/date'

import type { IEvent } from '@/types'

import DatePicker from './DatePicker.vue'
import CInput from './CInput.vue'
import CDialog from './CDialog.vue'

const props = defineProps<{ open: boolean, event: IEvent }>()
defineEmits<{
  (e: 'close'): void
  (
    e: 'edit',
    value: IEvent
  ): void
  (e: 'delete', id: number): void
}>()

const { event } = toRefs(props)

const [dateStart, timeStart] = event.value.start.split(' ')
// eslint-disable-next-line unused-imports/no-unused-vars
const [dateEnd, timeEnd] = event.value.end.split(' ')

const title = ref(event.value.title)
const date = ref<DateValue>()
const start = ref(timeStart)
const end = ref(timeEnd)
</script>

<template>
  <CDialog :open="open" @close="$emit('close')">
    <form
      class="space-y-4"
      @submit.prevent="$emit(
        'edit',
        {
          id: event.id,
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
      <DatePicker
        v-model="date"
        :default-value="parseDate(dateStart)"
        required
      />
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
        <button
          type="button"
          class="uppercase text-red-600"
          @click="$emit('delete', event.id)"
        >
          Discard
        </button>
        <button type="submit" class="uppercase text-[#A4AFB7]">
          Edit
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
