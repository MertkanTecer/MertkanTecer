<template>
  <main class="main">
    <!--==================== HOME ====================-->
    <Home />
    <!--==================== ABOUT ====================-->
    <About />
    <!--==================== SKILLS ====================-->
    <Skills />
    <!--==================== QUALIFICATION ====================-->
    <Qualification />
    <!--==================== SERVICES ====================-->
    <Services />
    <!--==================== PORTFOLIO ====================-->
    <Portfolio />
    <!--==================== CONTACT ME ====================-->
    <ContactMe />
  </main>
</template>

<script setup>
import Qualification from "../pages/Qualification.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Skills from "../pages/Skills.vue";
import Services from "../pages/Services.vue";
import Portfolio from "../pages/Portfolio.vue";
import ContactMe from "../pages/ContactMe.vue";
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .main {
    padding: 0 1rem;
  }
}
@media screen and (min-width: 1024px) {
  .main {
    padding: 0;
  }
}
</style>
