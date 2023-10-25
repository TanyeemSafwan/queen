<script lang="ts" setup>
// const data = getSomething();
const { data }  = await getSomething();
</script>
<template>
  <div>
    {{ data }}
    <HomepageHero />
    <HomepageProduct />
  </div>
</template>

<style> 
body { 
  margin: 0 !important; 
  } 
</style>