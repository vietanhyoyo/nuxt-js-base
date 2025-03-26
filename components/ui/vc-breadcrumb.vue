<template>
  <el-breadcrumb :separator="separator" class="vc-breadcrumb">
    <el-breadcrumb-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
    >
      <slot name="icon" v-if="item.icon">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
      </slot>
      {{ item.label }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    // Mỗi item có thể có: { label: "Trang chủ", to: "/", icon: HomeFilled }
  },
  separator: {
    type: String,
    default: '/',
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-breadcrumb.scss' as *;

.el-breadcrumb-item {
  display: flex;
  align-items: center;
}

.el-icon {
  margin-right: 4px;
}
</style>
