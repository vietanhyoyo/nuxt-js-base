<template>
  <el-breadcrumb v-bind="$attrs" class="vc-breadcrumb">
    <el-breadcrumb-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
    >
      <template v-if="item.icon">
        <el-icon class="vc-breadcrumb__icon">
          <component :is="item.icon" />
        </el-icon>
      </template>
      {{ item.label }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, // Cho phép kế thừa tất cả props của ElBreadcrumb mà không cần định nghĩa lại
})

defineProps({
  items: {
    type: Array,
    required: true,
    // Mỗi item có thể có: { label: "Trang chủ", to: "/", icon: HomeFilled }
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-breadcrumb.scss' as *;

.vc-breadcrumb__icon {
  margin-right: 4px;
  display: inline-flex;
  align-items: center;
}
</style>
