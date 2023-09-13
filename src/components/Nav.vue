<script setup>
import {useNotificationStore} from "../stores/notification.js";

const store = useNotificationStore();
</script>

<template>
  <nav class="col-span-1">
    <ul class="space-y-1.5">
      <li class="border-gray-50 border-b py-1.5">Accueil</li>
      <li class="py-1.5">
        <span class="relative">
          Notifications
          <span class="absolute text-red-400 top-2.5 -right-2"> {{ store.notification_number }}</span>
        </span>
      </li>
    </ul>
  </nav>
</template>
