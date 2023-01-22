<template>
  <section class="about section" id="about">
    <h2 class="section__title">About Me</h2>
    <span class="section__subtitle">My introduction</span>
    <div class="about__container container grid">
      <img src="../img/MTLOGO2.png" class="about__img" alt="" />
      <div class="about__data">
        <p class="about__description">
          Web developer, with extensive knowledge and years of experience,
          working in web technologies delivering quality work
        </p>
        <about-info></about-info>
        <div class="about__buttons">
          <a
            download
            href="/files/MertkanTecerResume.pdf"
            class="button button--flex"
          >
            Download<i class="uil uil-download-alt button__icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutInfo from "../components/aboutInfo.vue";
</script>

<style scoped>
.about__img {
  width: 200px;
  border-radius: 50%;
  justify-self: center;
  box-shadow: 1px 1px 1px 1px rgb(12, 10, 7);
  align-self: center;
}
.about__description {
  text-align: center;
  margin-bottom: var(--mb-2-5);
}
.about__buttons {
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 582px) {
  .about__container {
    grid-template-columns: repeat(2, 2fr);
  }
}
@media screen and (min-width: 768px) {
  .about__container {
    column-gap: 5rem;
  }
  .about__img {
    width: 350px;
  }
  .about__description {
    text-align: initial;
  }
  .about__info {
    justify-content: space-between;
  }
  .about__buttons {
    justify-content: initial;
  }
}
</style>
