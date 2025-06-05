<template>
  <div style="border: 2px solid #00c8a0; padding: 15px; border-radius: 12px; margin: 15px 0;">
    <h3>👤 Family Card</h3>
    <p><strong>Name:</strong> {{ name }}</p>
    <p><strong>Age:</strong> {{ age }}</p>
    <p><strong>Study Name:</strong> {{ info?.name || 'Not Available' }}</p>
    <button v-on:click="getdata"> Call Function </button>
  </div>
</template>

<script>
export default {
  name: 'FamilyCard',
  props: {
    name: String,
    age: Number,
    getdata: Function,
    info: Object, // renamed from 'data' to 'info'
  }
}
</script>
