<!-- pages/dashboard.vue -->
<template>
  <div class="dashboard-container">
    <h1 class="h1 title">Dashboard Quản Lý Nhân Sự</h1>

    <vc-row :gutter="28">
      <vc-col v-for="(stat, index) in stats" :key="index" :span="6">
        <StatCard v-bind="stat" />
      </vc-col>
    </vc-row>

    <vc-card class="table-card">
      <vc-table :data="tableData" style="width: 100%">
        <vc-table-column prop="date" label="Ngày vào" width="180" />
        <vc-table-column prop="name" label="Tên" width="180" />
        <vc-table-column prop="position" label="Chức vụ" />
        <vc-table-column prop="status" label="Trạng thái" />
      </vc-table>
    </vc-card>
  </div>
</template>

<script setup>
import { User, Money, Postcard, UserFilled } from '@element-plus/icons-vue'
import StatCard from './stat-card.vue'

definePageMeta({ layout: 'admin-layout' })

const stats = [
  {
    title: 'Tổng nhân viên',
    value: 150,
    footer: '+2 nhân viên mới',
    icon: User,
    color: '#3498db',
  },
  {
    title: 'Tổng tiền lương',
    value: '500M VNĐ',
    footer: 'Tháng 3/2025',
    icon: Money,
    color: '#e67e22',
  },
  {
    title: 'Tổng chức vụ',
    value: 12,
    footer: '3 quản lý, 9 nhân viên',
    icon: Postcard,
    color: '#2ecc71',
  },
  {
    title: 'Nhân viên mới',
    value: 5,
    footer: 'Trong 30 ngày qua',
    icon: UserFilled,
    color: '#e74c3c',
  },
]

const tableData = [
  {
    date: '2025-03-25',
    name: 'Nguyễn Văn A',
    position: 'Nhân viên',
    status: 'Hoạt động',
  },
  {
    date: '2025-03-24',
    name: 'Trần Thị B',
    position: 'Quản lý',
    status: 'Hoạt động',
  },
  {
    date: '2025-03-20',
    name: 'Lê Văn C',
    position: 'Nhân viên',
    status: 'Nghỉ việc',
  },
]
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 8px;
}
.title {
  margin-bottom: 28px;
}
.table-card {
  margin-top: 28px;
}
</style>
