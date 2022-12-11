<template>
    <div>
          <div class="contact__information">
            <i class="uil uil-phone contact__icon"></i>

            <div>
              <h3 class="contact__title">Call Me</h3>
              <span class="contact__subtitle">+(90) 546-964-9344</span>
            </div>
          </div>
          <div class="contact__information">
            <i class="uil uil-envelope contact__icon"></i>

            <div>
              <h3 class="contact__title">Email</h3>
              <span class="contact__subtitle">mertkan.tecer@gmail.com</span>
            </div>
          </div>
          <div class="contact__information">
            <i class="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 class="contact__title">Location</h3>
              <span class="contact__subtitle">Istanbul - Avcılar</span>
            </div>
          </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
.contact__information {
  display: flex;
  margin-bottom: var(--mb-2);
}
.contact__icon {
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
}
.contact__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}
.contact__subtitle {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}
</style>