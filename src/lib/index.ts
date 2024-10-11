import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { IEvent } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getEventsFromLocalStorage(): IEvent[] {
  const jsonString = localStorage.getItem('events')
  return jsonString ? JSON.parse(jsonString) : []
}

export function addEventToLocalStorage(e: {
  id: number
  title: string
  start: string
  end: string
}) {
  const events = getEventsFromLocalStorage()

  events.push(e)

  localStorage.setItem('events', JSON.stringify(events))
}

export function editEventInLocalStorage(
  e: {
    id: number
    title: string
    start: string
    end: string
  },
) {
  const events = getEventsFromLocalStorage()

  const eventIndex = events.findIndex(event => event.id === e.id)

  events[eventIndex] = e

  localStorage.setItem('events', JSON.stringify(events))
}

export function deleteEventFromLocalStorage(eventId: number) {
  const events = getEventsFromLocalStorage()

  const eventIndex = events.findIndex(e => e.id === eventId)

  events.splice(eventIndex, 1)

  localStorage.setItem('events', JSON.stringify(events))
}
