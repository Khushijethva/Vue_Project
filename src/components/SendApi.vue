<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold text-indigo-600 mb-4 text-center">🌐 API: Send Data</h1>

      <p class="text-sm text-gray-500 text-center mb-2">
      API Source: 
      <a href="http://localhost:3000/users" target="_blank" class="text-blue-600 underline">
        http://localhost:3000/users
      </a>
    </p>
    <p class="text-sm text-gray-500 text-center mb-6">
      You can test APIs using 
      <a href="https://www.postman.com" target="_blank" class="text-orange-500 font-semibold underline">Postman</a>.
    </p>

    <div class="space-y-4">
      <input v-model="name" type="text" placeholder="Enter Name" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
      <br>
      <input v-model="email" type="email" placeholder="Enter Email" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
      <br>
      <button @click="addUser" class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
        ➕ Add User
      </button>
    </div>
  </div>
</template>

<script>

// How To API run
// Open API Folder command run 
// npx json-server --watch db.json
// open it in browser

import axios from 'axios';

export default {
  name: 'SendApi',
  data() {
    return {
      name: '',
      email: ''
    };
  },
  methods: {
    addUser() {
      if (!this.name || !this.email) {
        alert("Please fill in both fields.");
        return;
      }


      // json api created in API Folder json server start after see this api
      axios.post('http://localhost:3000/users', {
        name: this.name,
        email: this.email
      })
      .then(response => {
        alert('✅ User added successfully!\nID: ' + response.data.id);
        console.log(response.data);
        this.name = '';
        this.email = '';
      })
      .catch(error => {
        console.error("❌ Error adding user:", error);
        alert("Something went wrong.");
      });
    }
  }
};
</script>

<style scoped>
body {
  background-color: #f3f4f6;
}
</style>
