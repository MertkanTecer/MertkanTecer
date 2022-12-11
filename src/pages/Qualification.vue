<template>
  <section class="qualification section">
    <h2 class="section__title">Qualification</h2>
    <span class="section__subtitle">My personal journey</span>

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div
          class="qualification__button button--flex"
          :class="{ active: setTab == true }"
          @click="setTab = true"
        >
          <i class="uil uil-graduation-cap qualification__icon"></i>
          Education
        </div>
        <div
          class="qualification__button button--flex"
          :class="{ active: setTab == false }"
          @click="setTab = false"
        >
          <i class="uil uil-briefcase-alt qualification__icon"></i>
          Work
        </div>
      </div>
      <div class="qualification__sections">
        <education-list v-if="setTab"></education-list>
        <work-list v-else></work-list>
      </div>
    </div>
  </section>
</template>

<script setup>
import educationList from "../components/educationList.vue";
import workList from "../components/workList.vue";
import { ref } from "vue";
const setTab = ref(true);
</script>

<style scoped>
.qualification__icon {
  font-size: 1.8rem;
  margin-right: var(--mb-0-25);
}
.qualification__tabs {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);
}
.qualification__button {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
}
.qualification__button:hover {
  color: var(--first-color);
}
.active {
  color: var(--first-color);
}
@media screen and (min-width: 582px) {
  .qualification__sections {
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  }
}
@media screen and (min-width: 768px) {
  .qualification__button {
    margin: 0 var(--mb-1);
  }
  .qualification__sections {
    grid-template-columns: 0.5fr;
  }
}
</style>
