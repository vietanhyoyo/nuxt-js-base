<template>
  <el-col v-bind="$attrs" :class="['vc-col', colClass]">
    <slot />
  </el-col>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, // Cho phép kế thừa tất cả props của ElCol mà không cần định nghĩa lại
})

defineProps({
  colClass: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-col.scss' as *;
</style>
