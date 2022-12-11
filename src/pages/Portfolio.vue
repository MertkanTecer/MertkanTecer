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
            <img src="../img/portfolio1.jpg" class="portfolio__img" alt="" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">Icarus Software</h3>
              <p class="portfolio__description">
                Website adaptable to all devices with reusable components and
                animated interactions.
              </p>
              <a
                href="http://www.icarussoftware.herokuapp.com"
                class="button button--flex button--small portfolio__button"
              >
                Demo
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </swiper-slide>

          <!--==================== PORTFOLIO 2 ====================-->
          <swiper-slide class="portfolio__content grid">
            <img src="../img/portfolio2.jpg" class="portfolio__img" alt="" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">Upgrade Me</h3>
              <p class="portfolio__description">
                Website that you can buy virtual items and upgrade to re-sell
                items to anyone or website itself.
              </p>
              <a
                href="#"
                class="button button--flex button--small portfolio__button"
              >
                Demo
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
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
.portfolio__content {
  padding: 0 1.5rem;
}
.portfolio__img {
  width: 265px;
  border-radius: 0.5rem;
  justify-self: center;
}
.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}
.portfolio__description {
  margin-bottom: var(--mb-0-75);
}
.portfolio__button:hover .button__icon {
  transform: translateX(0.25rem);
}
@media screen and (min-width:768px) {
    .portfolio__img{
    width: 320px;
  }
  .portfolio__content{
    align-items: center;
  }
}
@media screen and (min-width:1024px) {
    .portfolio__content{
    column-gap: 5rem;
  }
}
</style>