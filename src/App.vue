<script setup lang="ts">
import {user} from "@/api/user";
const rst = ref();
const getData = async ()=>{
  rst.value = await user();
}
getData();
</script>

<template>
  <Counter/>
  <n-button>hello</n-button>
  <n-card title="hello">
    <p>{{rst?.message}}</p>
  </n-card>

<!--  {{data}}-->
<!--  {{error}}-->
<!--  {{loading}}-->
</template>

<style scoped>
</style>
