<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

var bpi = ref();
onMounted(() => {
  axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) => {
    bpi.value = res.data.bpi;
    document.getElementById("loading").remove();
  });
  setInterval(() => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        bpi.value = res.data.bpi;
      });
  }, 25000);
});
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <h3 class="mb-4">
          <i class="bi bi-currency-bitcoin"></i> Bitcoin Price Index:
          <div id="loading" class="col text-center">Loading...</div>
        </h3>
        <div class="col" v-for="item in bpi">
          <div
            class="card shadow-lg p-3 mb-5 bg-body rounded-custom text-center"
          >
            <p>
              <strong>{{ item.code }}</strong> ({{ item.description }})
            </p>
            <p><i class="bi bi-cash me-2"></i>{{ item.rate }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
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
