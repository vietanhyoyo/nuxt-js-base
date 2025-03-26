<template>
  <el-button v-bind="$attrs" :class="['vc-btn', buttonClass]" @click="onClick">
    <slot name="icon" />
    <slot />
  </el-button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, 
})

defineProps({
  buttonClass: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])

const onClick = (event) => {
  emit('click', event)
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ui/vc-button.scss' as *;
</style>
