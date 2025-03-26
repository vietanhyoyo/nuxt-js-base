<template>
  <el-card class="vc-card" v-bind="$attrs">
    <template #header v-if="title || $slots.header">
      <slot name="header">
        <h3 class="vc-card__title">{{ title }}</h3>
      </slot>
    </template>

    <slot />

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </el-card>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, 
})

defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-card.scss' as *;
</style>
