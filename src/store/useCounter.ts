
export const useCounter =  defineStore('counter',()=>{
    const count = ref(0)
    const double_count = computed(()=>count.value*2)
    const increment = ()=>{
        count.value++
    }
    return {
        count,
        double_count,
        increment
    }
})

