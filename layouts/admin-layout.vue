<template>
  <el-container class="admin-layout">
    <admin-sidebar
      :is-collapsed="isCollapsed"
      :active-menu="activeMenu"
      :default-openeds="defaultOpeneds"
    />

    <el-container>
      <el-header class="admin-header">
        <admin-header :is-collapsed="isCollapsed" @toggle="toggleMenu" />
      </el-header>
      <el-main class="admin-content"><slot /></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { AdminSidebar } from '#components'
import { AdminHeader } from '#components'

const route = useRoute()
const activeMenu = computed(() => route.path)

const isCollapsed = ref(false)
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value
}

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

.admin-content {
  padding: 20px;
  min-height: calc(100vh - 60px);
}
</style>
