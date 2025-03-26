<template>
  <el-row class="vc-row" v-bind="$attrs">
    <slot />
  </el-row>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, // Cho phép truyền tất cả thuộc tính mà không cần định nghĩa lại
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-row.scss' as *;
</style>
