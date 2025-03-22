<template>
  <el-container class="admin-layout">
    <!-- Sidebar -->
    <el-aside :width="isCollapsed ? '64px' : '200px'" class="admin-sidebar">
      <el-scrollbar>
        <div class="logo">
          <logo-horizontal v-if="!isCollapsed" /> <logo-icon v-else />
        </div>
        <el-menu
          :collapse="isCollapsed"
          :collapse-transition="false"
          :default-openeds="['1', '3']"
          :default-active="activeMenu"
          router
          class="el-menu-vertical custom-menu"
          background-color="var(--el-bg-color-page)"
          text-color="var(--el-text-color-primary)"
          active-text-color="var(--el-color-primary)"
        >
          <el-sub-menu index="1">
            <template #title
              ><el-icon><Message /></el-icon
              ><span v-show="!isCollapsed">Navigator One</span></template
            >
            <el-menu-item-group title="Group 1">
              <el-menu-item index="/admin/option1">Option 1</el-menu-item>
              <el-menu-item index="/admin/option2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="/admin/option3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option 4</template>
              <el-menu-item index="/admin/option4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title
              ><el-icon><Menu /></el-icon
              ><span v-show="!isCollapsed">Navigator Two</span></template
            >
            <el-menu-item-group title="Group 1">
              <el-menu-item index="/admin/two-option1">Option 1</el-menu-item>
              <el-menu-item index="/admin/two-option2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="/admin/two-option3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="/admin/two-option4-1"
                >Option 4-1</el-menu-item
              >
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title
              ><el-icon><Setting /></el-icon
              ><span v-show="!isCollapsed">Navigator Three</span></template
            >
            <el-menu-item-group title="Group 1">
              <el-menu-item index="/admin/three-option1">Option 1</el-menu-item>
              <el-menu-item index="/admin/three-option2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="/admin/three-option3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="/admin/three-option4-1"
                >Option 4-1</el-menu-item
              >
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!-- Main Content -->
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
import { Menu, Message, Setting, Fold, Expand } from '@element-plus/icons-vue'
import { LogoHorizontal } from '#components'
import { LogoIcon } from '#components'
import { ModeSwitch } from '#components'

const route = useRoute()
const activeMenu = computed(() => route.path)

// Thêm toggle menu state
const isCollapsed = ref(false)
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" scoped>
.logo {
  height: 34px;
  padding: 16px 0px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-sidebar {
  border-right: 1px solid var(--el-border-color);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

.el-menu-vertical {
  border-right: none;
  min-height: 100%;
}

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
  background-color: var(--el-bg-color);
  min-height: calc(100vh - 60px);
}

.custom-menu {
  background-color: #fff;
  color: #333;
}

.dark .custom-menu {
  background-color: var(--bg-color);
  color: #f5f5f5;
}

.custom-menu .el-menu-item:hover {
  background-color: #f5f5f5;
}

.dark .custom-menu .el-menu-item:hover {
  background-color: #333;
}

::deep(.el-sub-menu__title) {
  white-space: nowrap;
}
</style>
