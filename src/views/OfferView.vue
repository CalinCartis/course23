<script setup>
import PlanComponent from "@/components/PlanComponent.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const plans = [
  {
    title: "BASIC",
    price: "40",
    currency: "RON",
    text: "luna + TVA",
    btnText: "CONT DEMO",
    color: "#4fbed1",
  },
  {
    title: "BUSINESS",
    price: "50",
    currency: "RON",
    text: "luna + TVA",
    btnText: "CONT DEMO",
    color: "#5c5aa6",
  },
  {
    title: "PREMIUM",
    price: "70",
    currency: "RON",
    text: "luna + TVA",
    btnText: "CONT DEMO",
    color: "#b2a814",
  },
];
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col" v-for="plan in plans">
          <PlanComponent
            :title="plan.title"
            :price="plan.price"
            :currency="plan.currency"
            :text="plan.text"
            :btnText="plan.btnText"
            :color="plan.color"
          ></PlanComponent>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
