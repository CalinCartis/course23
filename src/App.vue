<script setup>
import { RouterLink, RouterView } from "vue-router";
import "bootstrap";
import "axios";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="80"
      height="80"
    />

    <div class="wrapper mb-4">
      <nav>
        <RouterLink to="/"><h4>Home</h4></RouterLink>
        <RouterLink to="/offer"><h4>Offer</h4></RouterLink>
        <RouterLink to="/contact"><h4>Contact</h4></RouterLink>
        <RouterLink to="/filter"><h4>Filter</h4></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import "bootstrap";
@import "bootstrap-icons";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: black;
  transition: 0.4s;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  color: black;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
