<template>
  <el-text
    :class="['vc-text', text_class]"
    :type="type"
    :size="size"
    :truncated="truncated"
  >
    <slot />
  </el-text>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
  truncated: {
    type: Boolean,
    default: false,
  },
  text_class: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-text.scss' as *;
</style>
