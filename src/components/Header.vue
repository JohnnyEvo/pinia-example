<script setup>
import {useNotificationStore} from "../stores/notification.js";

const store = useNotificationStore();
</script>

<template>
  <header class="flex justify-between items-center">
    <h1 class="font-bold">Super site</h1>
    <figure class="relative inline-block">
      <span class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">JC</span>
      <span v-if="store.notification_number > 0" :title="`${store.notification_number} notifications`" class="absolute bottom-1 right-1 text-red-400 inline-block w-3 h-3">{{ store.notification_number }}</span>
    </figure>
  </header>
</template>
