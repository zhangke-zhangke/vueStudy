<template>
    <h1>This is the text component</h1>
    <div v-for="item in props.comData" :key="item.id">
        <p>{{ item.name }}</p>
        <p>{{ item.age }}</p>
    </div>
</template>



<script setup>
const props = defineProps({
    comData: {
        type: Array,
        default: () => []
    }
})

</script>


