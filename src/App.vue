<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="text-center mb-6">
      <img alt="Vue logo" src="./assets/logo.png" class="mx-auto w-24 mb-4" />

       <!-- Change URL in path chek content Routing Path -->
      <router-view> </router-view>
        <br>


      <h1 class="text-2xl font-bold text-indigo-600">Vue Component Switcher</h1>
      <div class="mt-4 flex justify-center space-x-4">
        <button @click="tab = 'HelloWorld'" class="btn">HelloWorld</button>
        <button @click="tab = 'HomePage'" class="btn">Home Page</button>
        <button @click="tab = 'SlotsDemo'" class="btn">Slots Demo</button>
        <button @click="tab = 'LoginApp'" class="btn">Form</button>
        <button @click="tab = 'RestApi'" class="btn">Rest Api</button>
        <button @click="tab = 'SendApi'" class="btn">Send Api Data</button>
        

      </div>
    </div>

    <!-- Component rendering -->
    <component :is="tab" />

    <!-- SlotsDemo preview -->
    <div v-if="tab === 'SlotsDemo'" class="mt-6 border-t pt-6">
      <SlotsDemo data="Khushi">
        <template v-slot:SlotSec>
          <h2 class="text-xl font-semibold text-green-600">Hi, This is a Slot!</h2>
        </template>

        <template v-slot:social_Media>
          <div class="flex items-center justify-center space-x-4 mt-2">
            <h2 class="text-md text-gray-700">Whatsapp</h2>
            <a href="https://www.whatsapp.com/" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" class="w-8 h-8" />
            </a>
          </div>
        </template>

        <div class="mt-4">
          <a href="https://www.google.com" target="_blank" class="text-blue-500 underline">Visit Google</a>
        </div>

        <img src="https://img-c.udemycdn.com/course/240x135/6585667_1e3f_5.jpg"
          class="mt-4 rounded shadow-lg mx-auto" />
      </SlotsDemo>
    </div>

    <!-- All Component With visible without app id div in include   -->
    <teleport to="#footer">

      <MyFooter> </MyFooter>

    </teleport>
    <!-- All Component With visible without app id div in include   -->



  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/Home.vue'
import LoginApp from './components/Login.vue';
import SlotsDemo from './components/SlotsDemo.vue';
import MyFooter from './components/MyFooter.vue';
import RestApi from './components/API.vue';
import SendApi from './components/SendApi.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage,
    LoginApp,
    SlotsDemo,
    MyFooter,
    RestApi,
    SendApi,
  },
  data() {
    return {
      tab: 'HelloWorld'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Tailwind-style utility buttons, fallback for custom CSS */
.btn {
  @apply px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  background: #f9f9f9;
  padding: 20px;
}

.logo {
  width: 120px;
  margin-bottom: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #42b983;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.button-group button {
  padding: 10px 18px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-group button:hover {
  background-color: #369c6d;
}

.button-group button.active {
  background-color: #2c3e50;
}

.component-box {
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
}
</style>
