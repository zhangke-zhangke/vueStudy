<template>
    <div class="userInfo" >
        <p>用户名：{{ userInfo.userName }}</p>
        <p>年龄：{{ userInfo.age }}</p>
        <p>邮箱：{{ userInfo.userEmail }}</p>
        <span v-if="isAdmin">您当前登录的是admin</span>
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount, reactive, ref, computed } from 'vue'
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/userStore';

const store = useUserStore()

const userName = ref('')
const age = ref('')
const userEmail = ref('')

const userInfo = reactive({
    userName,
    age,
    userEmail
})

onBeforeMount(() => {
    getUserInfo()
})

function getUserInfo(){
    console.log('store里userName值:', store.userName)
    let params = {
        'userName': store.userName
    }
    axios.get('http://172.16.30.107:5000/queryUserDetail', {params: params})
        .then(response => {
            userInfo.userName = response.data.data.name,
            userInfo.age = response.data.data.age,
            userInfo.userEmail = response.data.data.email
        })
        .catch(error => {
            ElMessage.error('查询失败！')
        })
}

// function isAdmin(){
//     userInfo.userName == 'admin' ? true : false
// }

const isAdmin = computed(() => {
    return store.userName == 'admin' ? true : false
})


</script>


<style scoped>


</style>