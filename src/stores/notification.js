import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useNotificationStore = defineStore('notification', () => {
    const notification = ref([]);
    const notification_number = computed(() => notification.value.length);

    const getNotificationNumber = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        notification.value = await response.json();
    };

    const addNotification = () => {
        notification.value.push([]);
    }

    const deleteNotification = () => {
        notification.value.pop();
    }

    const clearNotification = () => {
        notification.value = [];
    }

    return {
        notification,
        notification_number,
        getNotificationNumber,
        addNotification,
        deleteNotification,
        clearNotification
    };
});
