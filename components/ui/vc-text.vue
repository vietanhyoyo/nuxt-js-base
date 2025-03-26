<template>
  <el-text v-bind="$attrs" :class="['vc-text', textClass]">
    <slot />
  </el-text>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, // Cho phép kế thừa tất cả props của ElText
})

defineProps({
  textClass: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-text.scss' as *;
</style>
