<!-- components/VcInput.vue -->
<template>
  <el-input
    v-model="inputValue"
    :placeholder="placeholder"
    :type="type"
    :prefix-icon="prefixIcon"
    :size="size"
    :clearable="clearable"
    :show-password="showPassword"
    :class="['vc-input', inputClass]"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  prefixIcon: {
    type: [String, Object],
    default: null,
  },
  size: {
    type: String,
    default: 'default',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
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
