<script setup lang="ts">
const headerName = 'header';
</script>
<template>
  <div>
    <NuxtLayout :name="headerName" />
    <NuxtPage />
  </div>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
</style>