<template>
  <el-table-column v-bind="$attrs">
    <template v-if="$slots.default" #default="scope">
      <slot name="default" v-bind="scope" />
    </template>
    <template v-if="$slots.header" #header="scope">
      <slot name="header" v-bind="scope" />
    </template>
  </el-table-column>
</template>

<script setup>
defineOptions({
  inheritAttrs: false, // Cho phép kế thừa tất cả props của ElTableColumn mà không cần định nghĩa lại
})
</script>
