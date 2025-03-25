<template>
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
        <!-- Render Dashboard như el-menu-item -->
        <el-menu-item :index="menuItems[0].index">
          <el-icon>
            <component :is="iconComponents[menuItems[0].icon]" />
          </el-icon>
          <span v-show="!isCollapsed">{{ menuItems[0].title }}</span>
        </el-menu-item>

        <!-- Render các submenu còn lại -->
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
            <!-- Nếu có children, render như el-sub-menu -->
            <el-sub-menu v-if="item.children" :index="item.index" :class="!isCollapsed && 'admin-sub-menu'">
              <template #title>{{ item.title }}</template>
              <el-menu-item
                v-for="subItem in item.children"
                :key="subItem.index"
                :index="subItem.index"
                :class="!isCollapsed && 'admin-sub-menu-2'"
              >
                {{ subItem.title }}
              </el-menu-item>
            </el-sub-menu>
            <!-- Nếu không có children, render như el-menu-item -->
            <el-menu-item v-else :index="item.index" :class="!isCollapsed && 'admin-sub-menu'">
              {{ item.title }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import { Setting, User, PieChart, DataAnalysis } from '@element-plus/icons-vue'
import { LogoHorizontal } from '#components'
import { LogoIcon } from '#components'

// Nhận các props từ component cha
defineProps({
  isCollapsed: {
    type: Boolean,
    required: true,
  },
  activeMenu: {
    type: String,
    required: true,
  },
  defaultOpeneds: {
    type: Array,
    default: () => ['3', '4'],
  },
})

// Ánh xạ giữa tên icon (chuỗi) và component icon
const iconComponents = {
  PieChart: PieChart,
  User: User,
  DataAnalysis: DataAnalysis,
  Setting: Setting,
}

// Dữ liệu menu dưới dạng JSON
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
</script>

<style lang="scss" scoped>
.logo {
  height: 34px;
  padding: 32px 0px;
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

.admin-sub-menu {
  position: relative;
}

.admin-sub-menu::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 26px;
  transform: translateY(-50%);
  height: 100%;
  width: 1px;
  background-color: rgba(143, 143, 143, 0.447);
}

.admin-sub-menu-2 {
  position: relative;
}

.admin-sub-menu-2::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 46px;
  transform: translateY(-50%);
  height: 100%;
  width: 1px;
  background-color: rgba(143, 143, 143, 0.447);
}
</style>
