<script setup lang="ts">
import {user} from "@/api/user";
const rst = ref();
const getData = async ()=>{
  rst.value = await user();
}
getData();
import {useCounter} from "@/store/useCounter.ts"
const {count,double_count} = storeToRefs(useCounter());
const {increment} = useCounter();
</script>

<template>
  <span class="text-5xl text-pink ">hello,world</span>
  <Counter/>
  <n-button>hello</n-button>
  <n-card title="hello">
    <p>{{rst?.message}}</p>
  </n-card>

  <div>
    {{count}}--{{double_count}}
    <n-button @click="increment">increment</n-button>
  </div>

</template>


<style scoped>
</style>
