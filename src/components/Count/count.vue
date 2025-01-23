<template>
    <div>
      <h1>Counter</h1>
      <button @click="increment">Increment</button>
      <p>Current count: {{ count }}</p>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue'

    const count = ref(0)

    function increment() {
        count.value++
    }
</script>
  
<!-- <style scoped lang="scss"> -->
<style scoped>
  h1 {
    color: blue;
  }
</style>
  