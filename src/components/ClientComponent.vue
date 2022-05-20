<script setup>
const props = defineProps({
  name: String,
  email: String,
  phone: String,
});
</script>

<template>
  <div class="card shadow-lg p-3 mb-5 bg-body rounded-custom text-center">
    <p><strong>Name</strong></p>
    <p>Email</p>
    <p>Phone</p>
  </div>
</template>

<style scoped>
.card {
  max-width: 300px;
}
.rounded-custom {
  border-radius: 25px;
  border-color: transparent;
}
</style>
