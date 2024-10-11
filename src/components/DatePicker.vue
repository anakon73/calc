<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import {
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
} from 'reka-ui'

defineProps<{ defaultValue?: DateValue }>()

const vModel = defineModel<DateValue>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <DatePickerRoot
      v-model="vModel"
      :default-value="defaultValue"
    >
      <label class="text-sm text-[#A4AFB7]">
        event date
      </label>
      <DatePickerField
        v-slot="{ segments }"
        class="
          flex select-none items-center justify-between border-b
          border-[#A4AFB7] bg-white p-1 text-center text-[#A4AFB7]
        "
      >
        <div class="flex items-center">
          <template
            v-for="item in segments"
            :key="item.part"
          >
            <DatePickerInput
              v-if="item.part === 'literal'"
              :part="item.part"
            >
              {{ item.value }}
            </DatePickerInput>
            <DatePickerInput
              v-else
              :part="item.part"
              class="
                rounded p-0.5

                data-[placeholder]:text-[#A4AFB7]

                focus:outline-none
              "
            >
              {{ item.value }}
            </DatePickerInput>
          </template>
        </div>

        <DatePickerTrigger
          class="rounded p-1"
        >
          <Calendar class="h-4 w-4" />
        </DatePickerTrigger>
      </DatePickerField>

      <DatePickerContent
        :side-offset="4"
        class="relative z-[100] rounded-xl border bg-white"
      >
        <DatePickerArrow class="stroke-gray-300" />
        <DatePickerCalendar
          v-slot="{ weekDays, grid }"
          class="p-4"
        >
          <DatePickerHeader class="flex items-center justify-between">
            <DatePickerPrev
              class="
                inline-flex h-7 w-7 cursor-pointer items-center justify-center
                rounded-md bg-transparent text-black

                active:scale-98 active:transition-all

                hover:bg-stone-50
              "
            >
              <ChevronLeft class="h-4 w-4" />
            </DatePickerPrev>

            <DatePickerHeading class="font-medium text-black" />
            <DatePickerNext
              class="
                inline-flex h-7 w-7 cursor-pointer items-center justify-center
                rounded-md bg-transparent text-black

                active:scale-98 active:transition-all

                hover:bg-stone-50
              "
            >
              <ChevronRight class="h-4 w-4" />
            </DatePickerNext>
          </DatePickerHeader>
          <div
            class="
              flex flex-col space-y-4 pt-4

              sm:flex-row sm:space-x-4 sm:space-y-0
            "
          >
            <DatePickerGrid
              v-for="month in grid"
              :key="month.value.toString()"
              class="w-full border-collapse select-none space-y-1"
            >
              <DatePickerGridHead>
                <DatePickerGridRow class="mb-1 flex w-full justify-between">
                  <DatePickerHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="w-8 rounded-md text-xs text-green8"
                  >
                    {{ day }}
                  </DatePickerHeadCell>
                </DatePickerGridRow>
              </DatePickerGridHead>
              <DatePickerGridBody>
                <DatePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`weekDate-${index}`"
                  class="flex w-full"
                >
                  <DatePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    <DatePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="
                        relative flex h-8 w-8 items-center justify-center
                        whitespace-nowrap rounded-full border border-transparent
                        bg-transparent text-sm font-normal text-black
                        outline-none

                        before:absolute before:top-[5px] before:hidden
                        before:h-1 before:w-1 before:rounded-full
                        before:bg-white

                        data-[disabled]:text-black/30

                        data-[selected]:bg-green10 data-[selected]:font-medium
                        data-[selected]:text-green-600
                        data-[selected]:before:bg-white

                        data-[today]:before:block data-[today]:before:bg-green9

                        data-[unavailable]:pointer-events-none
                        data-[unavailable]:text-black/30
                        data-[unavailable]:line-through

                        hover:border-black
                      "
                    />
                  </DatePickerCell>
                </DatePickerGridRow>
              </DatePickerGridBody>
            </DatePickerGrid>
          </div>
        </DatePickerCalendar>
      </DatePickerContent>
    </DatePickerRoot>
  </div>
</template>
