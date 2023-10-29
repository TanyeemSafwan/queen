<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="row h-100">
    <div class="col-sm-12 my-auto">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ error.statusCode }}</h5>
    <p class="card-text">{{ error.statusMessage }}</p>
    <a class="btn btn-primary" @click="handleError">GO BACK TO HOME</a>
  </div>
  </div>
  </div>
</template>