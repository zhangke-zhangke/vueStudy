<template>
    <!-- <div class="login-container">

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="loginParams.userName" required />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="loginParams.password" required />
        </div>
        <button type="submit">登录</button>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div> -->
  
    <div class="login-container">
      <h2>登录</h2>
      <el-form v-bind:model=loginParams v-bind:rules="rules" ref="loginForm" label-width="80px">
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
            <el-button @click="handleLogin">登录</el-button>
            <div class="loginTpic">点击完成登录</div>
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
  
  const loginParams = reactive({
    'userName': '',
    'password': '',
  })

  const rules = reactive({
    userName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
  })

  const user = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const handleLogin = async() => {
    try {
      const response = await axios.post('http://172.16.30.107:5000/login', loginParams)
      alert(response.data.msg)
    } catch (err) {
      alert(err)
      error.value = err.response.data.msg ? err.response.data.msg : '登录失败';
      alert(error.value);
    } finally {
      alert('finally')
    }
  }

</script>
  
<style scoped>
  html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* 添加背景颜色 */
}


.login-container {
  /* align-items: center; */
  /* text-align:center; */
  width: 400px; /* 设置容器的最大宽度 */
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
  background-color: white; /* 背景颜色 */
  border-radius: 8px; /* 圆角效果 */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

  .el-form-item {
    margin-bottom: 15px;
    width: auto; /* 设置表单项的宽度 */
  }

  .el-input__inner {
    width: 100%;
  }
  .error {
    color: red;
    margin-top: 10px;
  }

  /* 确保按钮居中 */
  .el-form-item__content {
      display: flex;
      justify-content: center;
    }

  .el-button {
    width: 100%;
  }

  .loginTpic{
    display: none;
    background-color: aqua;
    width: 100%;
  }

  /* 鼠标移动到el-button元素时 */
  .el-button:hover{
    color: white;
    background-color: green;
  }

  /* 必须使loginTpic这个元素和el-button元素为兄弟元素或子元素才生效 */
  .el-button:hover + .loginTpic{
    display: block;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }

  .error {
    color: red;
    margin-top: 10px;
  }
</style>
  