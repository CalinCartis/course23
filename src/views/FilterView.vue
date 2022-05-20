<script setup>
import ClientComponent from "@/components/ClientComponent.vue";
import { ref, onMounted } from "vue";

const persons = [
  {
    name: "Calin Cartis",
    email: "calin.cartis@emanuel.ro",
    phone: "077400000000",
  },
  {
    name: "Daniel Oanta",
    email: "daniel.oanta@emanuel.ro",
    phone: "077400000000",
  },
  {
    name: "Nathan van Velden",
    email: "nathan.vanvelden@emanuel.ro",
    phone: "077400000000",
  },
  {
    name: "David van Velden",
    email: "david.vanvelden@emanuel.ro",
    phone: "077400000000",
  },
  {
    name: "Marcel Rural",
    email: "marcel.rural@emanuel.ro",
    phone: "077400000000",
  },
  {
    name: "Istvan Nagy",
    email: "istvan.nagy@emanuel.ro",
    phone: "077400000000",
  },
];

var letters = ref([]);

for (let i = 0; i < persons.length; i++) {
  if (!letters.value.includes(persons[i].name.charAt(0)))
    letters.value.push(persons[i].name.charAt(0));
}

var filter = ref();
function filterByLetter(newLetter) {
  filter.value = persons.filter((person) => person.name.startsWith(newLetter));
}
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col" v-for="person in persons">
          <ClientComponent
            :name="person.name"
            :email="person.email"
            :phone="person.phone"
          ></ClientComponent>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col center-block">
          <p>Alege o litera pentru a filtra:</p>
          <div class="btn-group" role="group" v-for="letter in letters">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              :id="letter"
              autocomplete="off"
              checked
            />
            <label :for="letter"
              ><button
                class="btn btn-outline-primary me-1"
                @click="filterByLetter(letter)"
              >
                {{ letter }}
              </button></label
            >
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col" v-for="person in filter">
          <ClientComponent
            :name="person.name"
            :email="person.email"
            :phone="person.phone"
          ></ClientComponent>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
