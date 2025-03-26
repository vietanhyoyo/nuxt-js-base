<template>
  <el-table v-bind="$attrs" class="vc-table">
    <slot />
  </el-table>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, // Cho phép kế thừa tất cả props của ElTable mà không cần định nghĩa lại
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-table.scss' as *;
</style>
