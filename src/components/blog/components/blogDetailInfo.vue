


<template>
    <blogDetailTemplate>
        <template #blogDetailTitle>
            <h1 class="title">{{ '我是插槽标题值' }}</h1>
        </template>

        <template #blogDetailContent>
            <p class="title">{{ '我是插槽内容值' }}</p>
        </template>

        <template #blogDetailFooter>
            <p class="title">{{ '我是插槽页脚值' }}</p>
        </template>
    </blogDetailTemplate>
</template>







<script setup>
import blogDetailTemplate from './blogDetailTemplate.vue';


import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()


onMounted ( () => {
    console.log(route.query.index)
    console.log(route.query.title)
}) 


</script>







