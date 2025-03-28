<template>
    <p style="text-align: center;">{{ title }}</p>
    <p style="text-align: center;">{{ content }}</p>
    <Child v-model:title="title"
           v-model:content="content"
    />
</template>


<script setup>
import { ref, reactive } from 'vue'
import Child from './components/text.vue';

const title = ref('我是标题')
const content = ref('我是内容')


const obj = {
    'title': 'title1',
    'content': 'content1'
}
const listObj = reactive([
    {
        'title': 'title2',
        'content': 'content2'
    },
    {
        'title': 'title3',
        'content': 'content3'
    }
])

</script>
