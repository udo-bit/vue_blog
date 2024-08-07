<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>

</style>
