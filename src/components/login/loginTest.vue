<template>
    <div class="login-container">
      <h2>登录</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">登录</button>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
      const error = ref('');
  
      const handleLogin = async () => {
        try {
          // 模拟登录请求
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username.value,
              password: password.value
            })
          });
  
          if (!response.ok) {
            throw new Error('登录失败，请检查用户名和密码');
          }
  
          const data = await response.json();
          console.log(data);
  
          // 登录成功后的处理
          // 例如：跳转到主页
          // router.push('/');
        } catch (err) {
          error.value = err.message;
        }
      };
  
      return {
        username,
        password,
        error,
        handleLogin
      };
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369867;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  