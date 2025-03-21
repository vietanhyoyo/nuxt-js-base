<template>
    <div class="home">
      <h1>Chào mừng đến với Nuxt App!</h1>
      <vc-button type="primary" @click="handleClick">Nút Element Plus</vc-button>
    </div>
  </template>
  
  <script setup>
  const handleClick = () => {
    alert('Bạn đã click nút Element Plus!')
  }
  </script>
  