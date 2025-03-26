<template>
  <el-input
    v-model="inputValue"
    v-bind="$attrs"
    :class="['vc-input', inputClass]"
  />
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false, // Cho phép truyền tất cả props của ElInput mà không cần định nghĩa lại
})

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  inputClass: {
    type: [String, Boolean],
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-input.scss' as *;
</style>
