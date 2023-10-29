<script setup>
definePageMeta({
  middleware: [
    'admin'
  ]
});
</script>

<template>
  <ClientOnly>
    checked for middleware
  </ClientOnly>
</template>