<template>
    <div class="about__info">
            <div>
              <span class="about__info-title">1</span>
              <span class="about__info-name"
                >Years <br />
                experience</span
              >
            </div>
            <div>
              <span class="about__info-title">3+</span>
              <span class="about__info-name"
                >Completed <br />
                projects</span
              >
            </div>
            <div>
              <span class="about__info-title">3+</span>
              <span class="about__info-name"
                >Companies <br />
                worked</span
              >
            </div>
          </div>
</template>

<script setup>

</script>

<style  scoped>
.about__info {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2-5);
}
.about__info-title {
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
}
.about__info-name {
  font-size: var(--smaller-font-size);
}
.about__info-title,
.about__info-name {
  display: block;
  text-align: center;
}
@media screen and (min-width:768px) {
  .about__info{
    justify-content: space-between;
  }
}

</style>