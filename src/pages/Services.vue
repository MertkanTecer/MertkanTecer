<template>
  <section class="services section" id="services">
    <h2 class="section__title">Services</h2>
    <span class="section__subtitle">What i Offer</span>

    <div class="services__container container grid">
      <!--==================== SERVICES 1 ====================-->
      <div class="services__content">
        <div>
          <i class="uil uil-arrow services__icon"></i>
          <h3 class="services__title">
            Frontend <br />
            Developer
          </h3>
        </div>
        <span
          @click="service1 = true"
          class="button button--flex button--small button--link services__button"
          >View more
          <i class="uil uil-arrow-right button__icon"></i>
        </span>

        <div class="services__modal" :class="{ 'active-modal': service1 }">
          <div class="services__modal-content">
            <h4 class="services__modal-title">Frontend Developer</h4>
            <i
              class="uil uil-times services__modal-close"
              @click="service1 = false"
            ></i>

            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>I do my job as good as possible</p>
              </li>
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>I create ux element interactions</p>
              </li>
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>I create responsive designs</p>
              </li>
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>
                  I build my project with fully reusable hooks and components
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--==================== SERVICES 2 ====================-->
      <div class="services__content">
        <div>
          <i class="uil uil-user services__icon"></i>
          <h3 class="services__title">Myself</h3>
        </div>
        <span
          @click="service2 = true"
          class="button button--flex button--small button--link services__button"
          >View more
          <i class="uil uil-arrow-right button__icon"></i>
        </span>
        <div class="services__modal" :class="{ 'active-modal': service2 }">
          <div class="services__modal-content">
            <h4 class="services__modal-title">Who i am</h4>
            <i
              class="uil uil-times services__modal-close"
              @click="service2 = false"
            ></i>

            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>I am good at problem solving and crisis management</p>
              </li>
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>I am extrovert and i like teamworks</p>
              </li>
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>i can understand and learn super fast</p>
              </li>
              <li class="services__modal-service">
                <i class="uil uil-check-circle services__modal-icon"></i>
                <p>I am ambitious and precise</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const service1 = ref(false);
const service2 = ref(false);
</script>

<style scoped>
/*==================== SERVICES ====================*/
.services__container {
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}
.services__content {
  position: relative;
  background-color: var(--container-color);
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
}
.services__content:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.services__icon {
  display: block;
  font-size: 1.5rem;
  color: var(--first-color);
  margin-bottom: var(--mb-1);
}
.services__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
}
.services__button {
  cursor: pointer;
  font-size: var(--small-font-size);
}
.services__button:hover .button__icon {
  transform: translateX(0.25rem);
}
.services__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}
.services__modal-content {
  position: relative;
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 0.5rem;
}
.services__modal-services {
  row-gap: 1rem;
}
.services__modal-service {
  display: flex;
}
.services__modal-title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
}
.services__modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
}
.services__modal-icon {
  color: var(--first-color);
  margin-right: var(--mb-0-25);
}
/* Active Modal */
.active-modal {
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 350px) {
  .services__container {
    grid-template-columns: max-content;
    justify-content: center;
  }
  .services__content {
    padding-right: 3.5rem;
  }
  .services__modal {
    padding: 0 0.5rem;
  }
}
@media screen and (min-width: 582px) {
}
@media screen and (min-width: 768px) {
  .services__container {
    grid-template-columns: repeat(2, 218px);
    justify-content: center;
  }
  .services__icon {
    font-size: 2rem;
  }
  .services__content {
    padding: 6rem 0 2rem 2.5rem;
  }
  .services__modal-content {
    width: 450px;
  }
}
@media screen and (min-width: 1024px) {
  .services__container {
    grid-template-columns: repeat(2, 368px);
    width: 100%;
  }
  .services__content {
    width: 100%;
  }
}
</style>