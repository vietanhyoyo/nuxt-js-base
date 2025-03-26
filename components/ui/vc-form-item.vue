<template>
  <el-form-item v-bind="$attrs" :class="['vc-form-item', itemClass]">
    <slot />
  </el-form-item>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  itemClass: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-form-item.scss' as *;
</style>
