<!-- pages/dashboard.vue -->
<template>
  <div class="dashboard-container">
    <div class="title"><h1 class="h1">Dashboard Quản Lý Nhân Sự</h1></div>

    <vc-row :gutter="20">
      <!-- Card Tổng nhân viên -->
      <el-col :span="6">
        <vc-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>Tổng nhân viên</span>
              <el-icon><User /></el-icon>
            </div>
          </template>
          <div class="stat-number">150</div>
          <div class="stat-footer">+2 nhân viên mới tháng này</div>
        </vc-card>
      </el-col>

      <!-- Card Tiền lương -->
      <el-col :span="6">
        <vc-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>Tổng tiền lương</span>
              <el-icon><Money /></el-icon>
            </div>
          </template>
          <div class="stat-number">500M VNĐ</div>
          <div class="stat-footer">Tháng 3/2025</div>
        </vc-card>
      </el-col>

      <!-- Card Chức vụ -->
      <el-col :span="6">
        <vc-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>Tổng chức vụ</span>
              <el-icon><Postcard /></el-icon>
            </div>
          </template>
          <div class="stat-number">12</div>
          <div class="stat-footer">3 quản lý, 9 nhân viên</div>
        </vc-card>
      </el-col>

      <!-- Card Nhân viên mới -->
      <el-col :span="6">
        <vc-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>Nhân viên mới</span>
              <el-icon><UserFilled /></el-icon>
            </div>
          </template>
          <div class="stat-number">5</div>
          <div class="stat-footer">Trong 30 ngày qua</div>
        </vc-card>
      </el-col>
    </vc-row>

    <!-- Bảng dữ liệu -->
    <vc-card class="table-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Ngày vào" width="180" />
        <el-table-column prop="name" label="Tên" width="180" />
        <el-table-column prop="position" label="Chức vụ" />
        <el-table-column prop="status" label="Trạng thái" />
      </el-table>
    </vc-card>
  </div>
</template>

<script setup>
import { User, Money, Postcard, UserFilled } from '@element-plus/icons-vue'

definePageMeta({
  layout: 'admin-layout',
})

// Dữ liệu mẫu cho bảng
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

<style scoped>
.title {
  margin-bottom: 20px;
}
.dashboard-container {
  padding: 20px;
}

.stat-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
  margin: 10px 0;
}

.stat-footer {
  color: #909399;
  font-size: 12px;
}
</style>
