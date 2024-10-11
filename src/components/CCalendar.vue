<script setup lang="ts">
import { ref } from 'vue'
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
  viewMonthGrid,
} from '@schedule-x/calendar'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import '@schedule-x/theme-default/dist/index.css'

import type { IEvent } from '@/types'
import {
  addEventToLocalStorage,
  deleteEventFromLocalStorage,
  editEventInLocalStorage,
  getEventsFromLocalStorage,
} from '@/lib'

import EditEvent from './EditEvent.vue'
import CreateEvent from './CreateEvent.vue'

const openEdit = ref(false)
const openCreate = ref(false)
const selectedEvent = ref<IEvent | null>(null)

const calendarApp = createCalendar({
  defaultView: viewMonthGrid.name,
  callbacks: {
    onClickDate: () => {
      openCreate.value = true
    },
    onEventClick: ({ id, start, end, title }) => {
      openEdit.value = true
      selectedEvent.value = { id: +id, start, end, title: title! }
    },
    onEventUpdate({ id, start, end, title }) {
      editEvent({ id: +id, start, end, title: title! })
    },
  },
  views: [
    createViewDay(),
    createViewWeek(),
    createViewMonthGrid(),
    createViewMonthAgenda(),
  ],
  events: getEventsFromLocalStorage(),
}, [createDragAndDropPlugin()])

function createEvent(event: Omit<IEvent, 'id'>) {
  const newEvent = {
    id: Date.now(),
    title: event.title,
    start: event.start,
    end: event.end,
  }

  calendarApp.events.add(newEvent)
  addEventToLocalStorage(newEvent)
  openCreate.value = false
}

function editEvent(event: IEvent) {
  calendarApp.events.update(event)
  editEventInLocalStorage(event)
  openEdit.value = false
}

function deleteEvent(eventId: number) {
  calendarApp.events.remove(eventId)
  deleteEventFromLocalStorage(eventId)
  openEdit.value = false
}
</script>

<template>
  <CreateEvent
    :open="openCreate"
    @create="createEvent($event)"
    @close="openCreate = false"
  />
  <EditEvent
    v-if="selectedEvent"
    :open="openEdit"
    :event="selectedEvent"
    @edit="editEvent($event)"
    @delete="deleteEvent($event)"
    @close="openEdit = false"
  />
  <div>
    <ScheduleXCalendar :calendar-app="calendarApp" />
  </div>
</template>

<style>
.sx__month-grid-day {
  min-height: 165px !important;
  min-width: 135px !important;
}
</style>
