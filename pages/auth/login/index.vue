<template>
  <div class="login-container">
    <vc-form
      :model="loginForm"
      :rules="rules"
      ref="loginFormRef"
      @submit.prevent="handleLogin"
    >
      <div class="title"><logo-horizontal /></div>

      <vc-form-item prop="username">
        <vc-input
          v-model="loginForm.username"
          placeholder="Username"
          :prefix-icon="User"
          size="large"
          clearable
        />
      </vc-form-item>

      <vc-form-item prop="password">
        <vc-input
          v-model="loginForm.password"
          type="password"
          placeholder="Password"
          :prefix-icon="Lock"
          show-password
          size="large"
          clearable
        />
      </vc-form-item>

      <vc-form-item>
        <vc-button
          type="primary"
          @click="handleLogin"
          :loading="loading"
          size="large"
          class="login-button"
        >
          Login
        </vc-button>
      </vc-form-item>
    </vc-form>
    <mode-button />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { navigateTo } from 'nuxt/app'

const loginFormRef = ref(null) 

const loginForm = reactive({
  username: '',
  password: '',
})

const rules = reactive({
  username: [
    { required: true, message: 'Please enter username', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please enter password', trigger: 'blur' },
    {
      min: 6,
      message: 'Password must be at least 6 characters',
      trigger: 'blur',
    },
  ],
})

const loading = ref(false)

const handleLogin = () => {
  if (!loginFormRef.value) {
    console.error('Form reference is not ready')
    return
  }

  loginFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        ElMessage.success('Login successful!')
        navigateTo('/admin/dashboard')
      }, 2000)
    } else {
      ElMessage.warning('Login failed!')
      return false
    }
  })
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-form {
  width: 100%;
  max-width: 300px;
  padding: 20px;
}

.title {
  width: 100%;
  max-width: 300px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.login-button {
  width: 100%;
}
</style>
