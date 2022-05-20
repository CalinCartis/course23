<script setup>
import PlanComponent from "@/components/PlanComponent.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

var bpi = ref();
onMounted(() => {
  axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) => {
    bpi.value = res.data.bpi;
  });
});
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h3>BPI:</h3>
          <ul v-for="item in bpi">
            <li>{{ item.code }} ({{ item.description }}) {{ item.rate }}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
