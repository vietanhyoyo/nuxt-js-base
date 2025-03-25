<template>
  <el-container class="admin-layout">
    <el-aside :width="isCollapsed ? '64px' : '220px'" class="admin-sidebar">
      <el-scrollbar>
        <div class="logo">
          <logo-horizontal v-if="!isCollapsed" /> <logo-icon v-else />
        </div>
        <el-menu
          :collapse="isCollapsed"
          :collapse-transition="false"
          :default-openeds="defaultOpeneds"
          :default-active="activeMenu"
          router
          class="el-menu-vertical custom-menu"
          background-color="var(--el-bg-color-page)"
          text-color="var(--el-text-color-primary)"
          active-text-color="var(--el-color-primary)"
        >
          <el-menu-item :index="menuItems[0].index">
            <el-icon>
              <component :is="iconComponents[menuItems[0].icon]" />
            </el-icon>
            <span v-show="!isCollapsed">{{ menuItems[0].title }}</span>
          </el-menu-item>

          <el-sub-menu
            v-for="menu in menuItems.slice(1)"
            :key="menu.index"
            :index="menu.index"
          >
            <template #title>
              <el-icon>
                <component :is="iconComponents[menu.icon]" />
              </el-icon>
              <span v-show="!isCollapsed">{{ menu.title }}</span>
            </template>
            <template v-for="item in menu.children" :key="item.index">
              <el-sub-menu v-if="item.children" :index="item.index">
                <template #title>{{ item.title }}</template>
                <el-menu-item
                  v-for="subItem in item.children"
                  :key="subItem.index"
                  :index="subItem.index"
                >
                  {{ subItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item.index">
                {{ item.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

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
import {
  Setting,
  User,
  Fold,
  Expand,
  PieChart,
  DataAnalysis,
} from '@element-plus/icons-vue'
import { LogoHorizontal } from '#components'
import { LogoIcon } from '#components'
import { ModeSwitch } from '#components'

const iconComponents = {
  PieChart: PieChart,
  User: User,
  DataAnalysis: DataAnalysis,
  Setting: Setting,
}

const menuItems = ref([
  {
    index: '/admin/over',
    title: 'Dashboard',
    icon: 'PieChart',
  },
  {
    index: '2',
    title: 'Employee',
    icon: 'User',
    children: [
      { index: '/admin/not', title: 'Employee List' },
      { index: '/admin/not', title: 'Add New Employee' },
      { index: '/admin/not', title: 'Departments' },
      { index: '/admin/not', title: 'Job Titles' },
    ],
  },
  {
    index: '3',
    title: 'Reports',
    icon: 'DataAnalysis',
    children: [
      { index: '/admin/not', title: 'HR Reports' },
      { index: '/admin/not', title: 'Payroll Reports' },
      { index: '/admin/not', title: 'Attendance Reports' },
    ],
  },
  {
    index: '4',
    title: 'System Settings',
    icon: 'Setting',
    children: [
      { index: '/admin/not', title: 'User Management' },
      {
        index: '/admin/roles-permissions',
        title: 'Roles & Permissions',
        children: [
          { index: '/admin/roles', title: 'Role' },
          { index: '/admin/permissions', title: 'Permission' },
        ],
      },
      { index: '/admin/not', title: 'System Configuration' },
    ],
  },
])

const defaultOpeneds = ref(['3', '4'])

const route = useRoute()
const activeMenu = computed(() => route.path)

const isCollapsed = ref(false)
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" scoped>
.logo {
  height: 34px;
  padding: 16px 0px;
  margin-bottom: 16px;
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
