<script setup lang="ts">
import { BadgeHelp, Bell, ChevronDown, MessageCircle } from 'lucide-vue-next'
import SearchInput from './SearchInput.vue'
</script>

<template>
  <header class="bg-white shadow">
    <div class="px-5 py-4">
      <div class="flex items-center justify-between">
        <SearchInput />
        <div class="flex items-center gap-4">
          <button
            class="
              text-gray-500

              hover:text-gray-700
            "
          >
            <BadgeHelp class="size-4 text-[#A4AFB7]" />
          </button>
          <button
            class="
              text-gray-500

              hover:text-gray-700
            "
          >
            <MessageCircle class="size-4 text-[#A4AFB7]" />
          </button>
          <button
            class="
              relative text-gray-500

              hover:text-gray-700
            "
          >
            <div
              class="
                absolute -right-0.5 -top-0.5 size-2 rounded-full border
                border-white bg-orange-300
              "
            />
            <Bell class="size-4 text-[#A4AFB7]" />
          </button>
          <div class="h-7 w-px bg-[#EBEBF2]" />
          <div class="relative">
            <button class="flex items-center gap-2">
              <span>John Doe</span>
              <ChevronDown class="size-4 text-[#A4AFB7]" />
              <img
                src="https://cdn-bjaef.nitrocdn.com/ftKNECgBRJzbHBCTEGCGknmQtewhqHFi/assets/images/optimized/rev-21d8e20/www.collarsandcuffs.ae/wp-content/uploads/2021/05/mens-suits-trends-234x300.jpg"
                class="size-8 rounded-full object-cover"
                alt="user avatar"
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
