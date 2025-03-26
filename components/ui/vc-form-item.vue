<!-- components/VcFormItem.vue -->
<template>
  <el-form-item :prop="prop" :class="['vc-form-item', itemClass]">
    <slot />
  </el-form-item>
</template>

<script setup>
defineProps({
  prop: {
    type: String,
    default: null, 
  },
  itemClass: {
    type: [String, Boolean],
    default: false,
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-form-item.scss' as *;
</style>
