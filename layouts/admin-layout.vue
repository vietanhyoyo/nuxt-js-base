<template>
  <el-container class="admin-layout">
    <admin-sidebar
      :is-collapsed="isCollapsed"
      :active-menu="activeMenu"
      :default-openeds="defaultOpeneds"
    />

    <el-container>
      <el-header class="admin-header">
        <div class="header-left">
          <el-button
            @click="toggleMenu"
            :icon="isCollapsed ? Expand : Fold"
            text
          />
        </div>
        <div class="header-right"><mode-switch /></div>
      </el-header>
      <el-main class="admin-content"><slot /></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Fold, Expand } from '@element-plus/icons-vue'
import { ModeSwitch } from '#components'
import { AdminSidebar } from '#components' 

const route = useRoute()
const activeMenu = computed(() => route.path)

// Thêm toggle menu state
const isCollapsed = ref(false)
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value
}

// Các submenu mặc định mở
const defaultOpeneds = ref(['3', '4'])
</script>

<style lang="scss" scoped>
.admin-layout {
  height: 100vh;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid var(--el-border-color);
}

.header-left {
  margin-left: -16px;
}

.page-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.admin-content {
  padding: 20px;
  min-height: calc(100vh - 60px);
}
</style>
