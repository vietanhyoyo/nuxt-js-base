<template>
  <div class="float-button" @click="toggleColorMode">
    <el-icon v-if="colorMode.value === 'dark'">
      <Sunny />
    </el-icon>
    <el-icon v-else>
      <Moon />
    </el-icon>
  </div>
</template>

<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.float-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--el-color-primary, #409eff);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: filter 0.3s ease;
}
.float-button:hover {
  filter: brightness(0.9);
}
</style>
