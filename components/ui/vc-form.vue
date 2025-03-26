<!-- components/VcForm.vue -->
<template>
  <el-form
    :model="model"
    :rules="rules"
    ref="internalFormRef"
    class="vc-form"
    @submit.prevent="onSubmit"
  >
    <slot />
  </el-form>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

defineProps({
  model: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['submit'])

const internalFormRef = ref(null)

defineExpose({
  validate: (callback) => {
    if (internalFormRef.value) {
      internalFormRef.value.validate(callback)
    }
  },
})

const onSubmit = () => {
  emit('submit')
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-form.scss' as *;
</style>
