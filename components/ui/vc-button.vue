<template>
  <el-button
    :class="['vc-btn', button_class]"
    :type="type"
    :size="size"
    :loading="loading"
    @click="onClick"
  >
    <slot name="icon" />
    <slot />
  </el-button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "default",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  button_class: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["click"])

const onClick = (event) => {
  emit("click", event)
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/vc-button.scss" as *;
</style>
