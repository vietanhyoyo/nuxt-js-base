<!-- components/VcForm.vue -->
<template>
  <el-form
    :model="model"
    :rules="rules"
    :ref="formRef"
    class="vc-form"
    @submit.prevent="onSubmit"
  >
    <slot />
  </el-form>
</template>

<script setup>
defineProps({
  model: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  formRef: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['submit'])

const onSubmit = () => {
  emit('submit')
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/components/vc-form.scss' as *;
</style>
