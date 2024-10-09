<template>
  <div class="text-center">
    <h1>Liste des utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">ID: {{user.id}} EMAIL:{{ user.email }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useUser } from '~/composables/users/useUser';

export default {
  setup() {
    const users = ref([]);

    const fetchUsers = async () => {
      try {
        users.value = await useUser.getUsers();
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    };
    onMounted(fetchUsers);
    return {
      users,
    };
  },
};
</script>