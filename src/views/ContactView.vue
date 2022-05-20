<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="container">
      
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <input type="text" class="form-control me-1" placeholder="Nume" aria-label="Nume">
            <input type="text" class="form-control ms-1" placeholder="Prenume" aria-label="Prenume">
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control me-1" placeholder="Email" aria-label="Email">
            <input type="text" class="form-control ms-1" placeholder="Telefon" aria-label="Telefon">
          </div>

          <div class="input-group mb-3">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Motiv contact</option>
              <option value="1">Doresc un cont DEMO</option>
              <option value="2">The second reason</option>
              <option value="3">The third reason</option>
            </select>
          </div>

          <legend>Alege planul pe care doresti sa-l testezi:</legend>
          <p class="fw-light">Mai multe detalii legate de planuri gasiti aici: <RouterLink to="/">Oferte</RouterLink></p>
          
          <div>
            <input type="radio" class="btn-check" name="options-outlined" id="BASIC" autocomplete="off" checked>
            <label class="btn btn-outline-primary me-1" for="BASIC">BASIC</label>

            <input type="radio" class="btn-check" name="options-outlined" id="BUSINESS" autocomplete="off">
            <label class="btn btn-outline-primary me-1" for="BUSINESS">BUSINESS</label>

            <input type="radio" class="btn-check" name="options-outlined" id="PREMIUM" autocomplete="off">
            <label class="btn btn-outline-primary" for="PREMIUM">PREMIUM</label>
          </div>

          <legend class="mt-3">Lucrezi singur sau in echipa?</legend>

          <div>
            <input type="radio" class="btn-check" name="options-outlined" id="Singur" autocomplete="off" checked>
            <label class="btn btn-outline-primary me-1 memberOption" for="Singur">Singur</label>

            <input type="radio" class="btn-check" name="options-outlined" id="Echipa" autocomplete="off">
            <label class="btn btn-outline-primary me-1 memberOption" for="Echipa">Echipa</label>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.memberOption{
  width:7rem;
  height:7rem;
}
</style>
