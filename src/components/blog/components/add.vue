<template>
    <el-dialog title="添加文章" v-model="dialogVisible" width="50%" :before-close="handleCancel">
        <el-form :model="form" ref="formRef" :rules="formRules" label-width="80px">
            <el-form-item label="标题" prop="title">
                <el-input v-model.trim="form.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <el-input type="textarea" v-model.trim="form.content" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">提交</el-button>
                <el-button @click="handleCancel" style="margin-left: 20px;">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>


<script setup>

import { reactive, ref, computed } from 'vue'


const dialogVisible = ref(true)

const emits = defineEmits(['submit', 'closeAdd'])
// const props = defineProps(['dialogAddBlog'])
// let dialogVisible = computed({
//     get(){
//         return props.dialogAddBlog
//     },
//     set(val) {
//         emits('update:dialogAddBlog', val)
//     }
// })


// el-form的ref属性绑定，用于formRef.value.validate验证
const formRef = ref(null)
// el-form的:model属性绑定
const form = ref({
    title: '',
    content: ''
})
// 跟el-form-item上的prop属性相对应
const formRules = {
    title: [
        { required: true, message: '请输入标题', trigger: 'blur' }
    ],
    content: [
        { required: true, message: '请输入内容', trigger: 'blur' }
    ],
}

function handleSubmit() {
    formRef.value.validate((valid) => {
        if (valid) {
            const { title, content } = form.value
            emits('submit', {
                'title': title,
                'content': content
            })
            // dialogVisible.value = false
            handleCancel()
        } else {
            console.log('error submit form')
        }
    })
}

function handleCancel() {
    emits('closeAdd')
}

</script>

<style></style>