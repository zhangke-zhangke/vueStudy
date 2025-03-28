<template>
    <div>
        <span>Title:</span>
        <el-input v-model="titleModel"></el-input>
        <span>Content:</span>
        <el-input v-model="contentModel"></el-input>
    </div>
</template>


<script setup>
// // 如果只有一个参数
// const model = defineModel()

// 多个参数时，指定参数名。返回的是一个ref对象
const titleModel = defineModel('title')
const contentModel = defineModel('content')

</script>