<script setup>
const props = defineProps({
  title: String,
  price: String,
  currency: String,
  text: String,
  btnText: String,
  color: String,
});
</script>

<template>
  <div class="plan" :style="{ color: props.color }">
    <div
      class="line rounded"
      :style="{ 'background-color': props.color }"
    ></div>
    <div
      class="content text-center p-4 mx-auto mt-3 rounded"
      :style="{ 'border-color': props.color }"
    >
      <h2>{{ props.title }}</h2>
      <h4 class="fw-light">
        <strong class="fw-bold">{{ props.price }}</strong> {{ props.currency }}
      </h4>
      <p class="fw-light">{{ props.text }}</p>
      <button
        class="btn btn-primary"
        :style="{ 'background-color': props.color }"
      >
        {{ props.btnText }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.plan {
  width: 350px;
  height: 270px;
}
.line {
  height: 5px;
}
.content {
  border: 1px solid;
  width: 80%;
  height: 80%;
}
p {
  color: black;
}
.btn {
  position: absolute;
  width: 120%;
  left: -10%;
  background-color: olive;
  border: none;
}
</style>
