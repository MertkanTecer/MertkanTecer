<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">Most recent work</span>

    <div class="portfolio__container container">
      <swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :autoplay="{ delay: 5000 }"
      >
        <!--==================== PORTFOLIO 1 ====================-->
        <swiper-slide class="portfolio__content grid">
          <img src="../img/WeatherApp2.png" class="portfolio__img" alt="" />

          <div class="portfolio__data">
            <h3 class="portfolio__title">Weather App</h3>
            <p class="portfolio__description">
              Weather Application made with Android Studio / Java by Mertkan
              Tecer
            </p>
          </div>
        </swiper-slide>

        <!--==================== PORTFOLIO 2 ====================-->
        <swiper-slide class="portfolio__content grid">
          <img
            src="../img/IcarusSoftware.jpg"
            class="marbo portfolio__img"
            alt=""
          />

          <div class="portfolio__data">
            <h3 class="portfolio__title">Icarus Software</h3>
            <p class="portfolio__description">
              Website Fully responsive design made with VueJs / Vanilla CSS /
              Bootstrap 4 / Tailwind CSS by Mertkan Tecer
            </p>
          </div>
        </swiper-slide>

         <!--==================== PORTFOLIO 3 ====================-->
         <swiper-slide class="portfolio__content grid">
          <img src="../img/UpgradeMe.png" class="portfolio__img" alt="" />

          <div class="portfolio__data">
            <h3 class="portfolio__title">Upgrade Me !</h3>
            <p class="portfolio__description">
              A Upgrade Game where you can upgrade your items with chance. Made with VueJS by Mertkan
              Tecer
            </p>
            <a href="https://upgrademe.vercel.app" class="link__button">Demo</a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
</script>

<style scoped>
/*==================== PORTFOLIO ====================*/
.portfolio__container {
  overflow: initial;
}
.marbo {
  margin-top: 5rem;
  width: 500px;
}
.link__button {
  cursor: pointer;
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.8rem;
  width: 100px;
  text-align: center;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
}
.portfolio__content {
  padding: 0 1.5rem;
}
.portfolio__img {
  border-radius: 0.5rem;
  justify-self: center;
}
.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}
.portfolio__description {
  margin-bottom: var(--mb-2);
}
.portfolio__button:hover .button__icon {
  transform: translateX(0.25rem);
}
@media screen and (min-width: 768px) {
  .portfolio__content {
    align-items: center;
  }
}
@media screen and (min-width: 1024px) {
  .portfolio__content {
    column-gap: 5rem;
  }
}
</style>
