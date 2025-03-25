<template>
  <div class="admin-header-content">
    <div class="header-left">
      <el-button @click="toggleMenu" :icon="isCollapsed ? Expand : Fold" text />
    </div>
    <div class="header-right"><mode-switch /></div>
  </div>
</template>

<script setup>
import { Fold, Expand } from '@element-plus/icons-vue'
import { ModeSwitch } from '#components'

// Nhận props từ component cha
defineProps({
  isCollapsed: {
    type: Boolean,
    required: true,
  },
})

// Phát sự kiện toggleMenu lên component cha
const emit = defineEmits(['toggle'])
const toggleMenu = () => {
  emit('toggle')
}
</script>

<style lang="scss" scoped>
.admin-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-left {
  margin-left: -16px;
}
</style>
