<!-- components/StatCard.vue -->
<template>
  <vc-card class="stat-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <el-icon :style="{ color: color }">
          <component :is="icon" />
        </el-icon>
      </div>
    </template>
    <div class="stat-number" :style="{ color: color }">{{ value }}</div>
    <div class="stat-footer">{{ footer }}</div>
  </vc-card>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  footer: String,
  icon: Object,
  color: String, // Màu sắc cho icon và số liệu
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stat-number {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}
.stat-footer {
  color: #909399;
  font-size: 12px;
}
</style>
