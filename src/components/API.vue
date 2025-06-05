<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
    <h1 class="text-3xl font-extrabold text-center text-blue-700 mb-4">🌐 REST API Demo</h1>
    
    <p class="text-sm text-gray-500 text-center mb-2">
      API Source: 
      <a href="https://jsonplaceholder.typicode.com/users" target="_blank" class="text-blue-600 underline">
        https://jsonplaceholder.typicode.com/users
      </a>
    </p>
    <p class="text-sm text-gray-500 text-center mb-6">
      You can test APIs using 
      <a href="https://www.postman.com" target="_blank" class="text-orange-500 font-semibold underline">Postman</a>.
    </p>

    <h2 class="text-2xl font-bold text-gray-800 mb-4">📋 User List</h2>
    
    <ul v-if="users.length > 0" class="space-y-3">
      <li v-for="user in users" :key="user.id" class="p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200">
        <div class="font-semibold text-lg text-indigo-700">👤 {{ user.name }}</div>
        <div class="text-sm text-gray-600">📧 {{ user.email }}</div>
      </li>
    </ul>
    
    <div v-else class="text-center text-gray-500 mt-6">
      ⏳ Loading users...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }
};
</script>

<style scoped>
body {
  background-color: #f9fafb;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
