<template>
    <div class="login-container">
      <el-form v-bind:model=loginParams v-bind:rules="rules" ref="loginForm" label-width="80px">
        <h2 class="title">登录</h2>
        <el-row>
          <el-col>
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="loginParams.userName" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginParams.password" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item >
            <el-button :plain="true" :loading="loading" @click="userLogin">登录</el-button>
          </el-form-item>
          <el-form-item v-if="error">
            <div class="error">{{ error }}</div>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </template>
  
<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  import { ElMessage } from 'element-plus';
  import { useUserStore } from '@/stores/userStore.js';
  
  const store = useUserStore()

  const route = useRoute()
  const router = useRouter()

  const loginParams = reactive({
    'userName': '',
    'password': '',
  })

  const rules = reactive({
    userName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
  })

  const user = ref(null)
  const loading = ref(null)
  const error = ref(null)
  const total = ref(0)

  // const handleLogin = async() => {
  //   try {
  //     const response = await axios.post('http://172.16.30.107:5000/login', loginParams)
  //     alert(response.data.msg)
  //   } catch (err) {
  //     alert(err)
  //     error.value = err.response.data.msg ? err.response.data.msg : '登录失败';
  //     alert(error.value);
  //   } finally {
  //     alert('finally')
  //   }

  function userLogin (){
    loading.value = true
    axios.post('http://172.16.30.107:5000/login', loginParams)
    .then((res) => {
      store.setUserName(loginParams.userName)

      // 登录成功跳转页面路由
      ElMessage.success(`用户：${store.userName}，欢迎回来！`)
      router.push({ name: 'handle'})
    })
    .catch(() => {
      ElMessage.error('用户名或密码错误！')
      loading.value = false
    })
    .finally(() => {
      loading.value = false
    })
  }

</script>
<style scoped>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;               /* 确保 html 和 body 高度为100% */
  background-color: #f0f0f0; /* 测试背景颜色 */
}

.login-container {
  position: absolute;          /* 使用绝对定位 */
  top: 50%;                   /* 垂直居中 */
  left: 50%;                  /* 水平居中 */
  transform: translate(-50%, -80%); /* 通过负的偏移实现绝对居中 */
  width: 100%;                /* 视口宽度 */
  max-width: 400px;          /* 设置最大宽度 */
}

/* .login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */

.title{
  margin: 0px auto 30px auto;
  text-align: center;
}

.el-form {
  width: 400px; 
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: white; 
  border-radius: 10px; 
}


.el-form-item {
  margin-bottom: 15px;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center; /* 中心对齐错误信息 */
}

.el-button {
  width: 100%;
}

.el-button:hover {
  color: white;
  background-color: green;
}
</style>
