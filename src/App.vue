<script setup>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import {useNotificationStore} from "./stores/notification.js";

const store = useNotificationStore();

store.getNotificationNumber();

const { addNotification, deleteNotification, clearNotification } = store;
</script>

<template>
  <div class="container mx-auto my-3">
    <Header />
    <hr class="border-b border-gray-50 my-3">
    <div class="md:grid grid-flow-row-dense grid-cols-4">
      <Nav />
      <article class="col-span-3" >
        <section class="mx-auto">
          <button @click.prevent="addNotification" type="button" class="transition py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Ajouter 1 notification
          </button>
          <button @click.prevent="deleteNotification" type="button" class="transition py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Supprimer 1 notification
          </button>
          <button @click.prevent="clearNotification" type="button" class="transition py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Effacer toutes les notifications
          </button>
        </section>
      </article>
    </div>
  </div>
</template>
