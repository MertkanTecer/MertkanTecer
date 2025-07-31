<template>
    <!--==================== QUALIFICATION CONTENT 1 ====================-->
    <div class="qualification__content qualification__active" id="education">
            <!--==================== QUALIFICATION 1 ====================-->
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">Computer Science</h3>
                <span class="qualification__subtitle">Istanbul University</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt qualification__icon"></i>
                  2017-2019
                </div>
              </div>
              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>

            <!--==================== QUALIFICATION 2 ====================-->
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"></span>
                <!--   <span class="qualification__line"></span> -->
              </div>
              <div>
                <h3 class="qualification__title">
                  Computer Education And Instructional Technology
                </h3>
                <span class="qualification__subtitle">Anadolu University</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt qualification__icon"></i>
                  2020 - Left Unfinished
                </div>
              </div>
            </div>
          </div>
</template>

<script setup>

</script>

<style scoped>
.qualification__data{
  display: grid;
  grid-template-columns: 1fr max-content 1fr ;
  column-gap: 1.5rem;
}
.qualification__title{
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
}
.qualification__subtitle{
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
}
.qualification__calendar{
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
}
.qualification__rounder{
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--first-color);
  border-radius: 50%;
}
.qualification__line{
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--first-color);
  transform: translate(6px,-7px);
}
@media screen and (max-width:350px) {
  .qualification__data{
    gap: .5rem;
  }
  }
</style>