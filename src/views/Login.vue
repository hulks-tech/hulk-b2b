<template>
  <div class="login-bg">
    <div class="login-top">
      <div class="login-slogan">Embark on Your Digital Transformation Journey</div>
    </div>
    <div class="login-form-wrapper">
      <el-card class="login-card">
        <div class="login-header">
          <span>Hello, welcome to FBD!</span>
          <span class="lang-switch">中文 | English</span>
        </div>
        <el-form :model="form" class="login-form">
          <el-form-item label="Company/Organization">
            <el-input v-model="form.company" placeholder="Company/Organization" />
          </el-form-item>
          <el-form-item label="User Name">
            <el-input v-model="form.username" placeholder="User Name" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password" type="password" placeholder="Password" />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.remember">Remember me</el-checkbox>
            <a class="forgot" href="#">Forget Password?</a>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%" @click="onLogin">Sign In</el-button>
          </el-form-item>
        </el-form>
        <div class="login-footer">
          Don't have an account. <a href="#">Sign Up</a>
        </div>
      </el-card>
    </div>
    <div class="login-bottom">© 2024 Powered by <span style="color:#f56c6c">♥</span> Digital Clothing</div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({
  company: '',
  username: '',
  password: '',
  remember: false,
})
const onLogin = () => {
  // 这里可对接后端接口
  router.push('/app')
}
</script>

<style scoped>
.login-bg {
  min-height: 100vh;
  background: #f5f5f9;
  position: relative;
}
.login-top {
  height: 260px;
  background: linear-gradient(180deg, #3a4a7c 80%, #f5f5f9 100%);
  border-bottom-left-radius: 50% 40px;
  border-bottom-right-radius: 50% 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}
.login-slogan {
  color: #fff;
  font-size: 20px;
  margin-bottom: 40px;
  font-family: serif;
}
.login-form-wrapper {
  display: flex;
  justify-content: center;
  margin-top: -100px;
}
.login-card {
  width: 400px;
  padding: 30px 30px 10px 30px;
}
.login-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.lang-switch {
  font-size: 13px;
  color: #888;
  cursor: pointer;
}
.login-form {
  margin-bottom: 0;
}
.forgot {
  float: right;
  font-size: 13px;
  color: #409eff;
  margin-left: auto;
}
.login-footer {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
.login-bottom {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
  color: #888;
  font-size: 13px;
}
</style> 