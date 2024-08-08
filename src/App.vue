<script setup lang="ts">
import {user} from "./api/user.ts";
</script>

<template>
  <Counter/>
  <n-button>hello</n-button>
  <n-card title="hello">
    <p>hello</p>
  </n-card>
  {{user(1,3)}}
</template>

<style scoped>
</style>
