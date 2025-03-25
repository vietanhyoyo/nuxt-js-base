<template>
  <el-switch
    v-model="isDark"
    @change="toggleColorMode"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    active-color="#1f1f1f"
    inactive-color="#E6E8EB"
    style="--el-switch-border-radius: 20px"
  />
</template>

<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'

const colorMode = useColorMode()
const isDark = ref(colorMode.value === 'dark')

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'dark' : 'light'
}
</script>

<style>
.el-switch {
  --el-switch-on-color: var(--el-color-primary);
  --el-switch-off-color: var(--el-border-color);
}
</style>
