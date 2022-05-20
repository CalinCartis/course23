<script setup>
const props = defineProps({
  name: String,
  email: String,
  phone: String,
});
</script>

<template>
  <div class="card shadow-lg p-3 mb-5 bg-body rounded-custom text-center">
    <p>
      <i class="bi bi-person me-1"></i> <strong>{{ props.name }}</strong>
    </p>
    <p><i class="bi bi-envelope me-2"></i>{{ props.email }}</p>
    <p><i class="bi bi-telephone me-2"></i>{{ props.phone }}</p>
  </div>
</template>

<style scoped>
.card {
  font-size: 0.9rem;
}

.rounded-custom {
  border-radius: 25px;
  border-color: transparent;
}
</style>
