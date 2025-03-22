<template>
  <vc-button
    class="float-button"
    circle
    type="primary"
    @click="toggleColorMode"
  >
    <el-icon v-if="colorMode.value === 'dark'">
      <Sunny />
    </el-icon>
    <el-icon v-else>
      <Moon />
    </el-icon>
  </vc-button>
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
  z-index: 1000;
}
</style>
