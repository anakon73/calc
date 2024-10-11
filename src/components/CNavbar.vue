<script lang="ts" setup>
import type { FunctionalComponent } from 'vue'
import {
  BadgeHelp,
  Barcode,
  Calendar,
  ChartNoAxesColumn,
  Home,
  Mail,
  MessageSquare,
  Receipt,
  Settings,
  User,
} from 'lucide-vue-next'

import { cn } from '@/lib'

const routes: { icons: FunctionalComponent, name: string }[] = [
  { icons: Home, name: 'Home' },
  { icons: ChartNoAxesColumn, name: 'Dashboard' },
  { icons: Mail, name: 'Inbox' },
  { icons: Barcode, name: 'Products' },
  { icons: Receipt, name: 'Invoices' },
  { icons: User, name: 'Customers' },
  { icons: MessageSquare, name: 'Chat Room' },
  { icons: Calendar, name: 'Calendar' },
  { icons: BadgeHelp, name: 'Help Center' },
  { icons: Settings, name: 'Settings' },
]
</script>

<template>
  <div class="min-h-screen w-full max-w-[260px] bg-[#43425D] text-white">
    <h2 class="bg-[#3C3C57] py-7 pl-5">
      IMPEKABLE
    </h2>
    <div>
      <div
        v-for="route in routes"
        :key="route.name"
        :class="cn(
          'py-5 pl-5',
          route.name === 'Calendar'
            && 'border-l-[5px] border-[#A3A0FB] bg-[#3C3C57]',
        )"
      >
        <button class="flex items-center gap-3">
          <component
            :is="route.icons"
            :class="cn(
              'size-4 text-[#A5A4BF]',
              route.name === 'Calendar' && 'text-[#A3A0FB]',
            )"
          />
          <p>{{ route.name }}</p>
        </button>
      </div>
    </div>
  </div>
</template>
