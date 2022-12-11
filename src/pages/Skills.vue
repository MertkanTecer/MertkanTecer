<template>
   <section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <span class="section__subtitle">My technical level</span>

      <div class="skills__container container grid">
        <div>
          <!--==================== SKILLS 1 ====================-->
          <div
            class="skills__content"
            :class="{ skills__open: skill1, skills__close: !skill1 }"
          >
            <div class="skills__header">
              <i class="uil uil-brackets-curly skills__icon"></i>
              <div>
                <h1 class="skills__title">Frontend developer</h1>
                <span class="skills__subtitle">More than 1 years</span>
              </div>
              <i
                class="uil uil-angle-down skills__arrow"
                @click="changeSkill1"
              ></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">HTML</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__html"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">CSS</h3>
                  <span class="skills__number">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__css"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">JavaScript</h3>
                  <span class="skills__number">60%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__js"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Vue</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__vue"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">React</h3>
                  <span class="skills__number">35%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
          <!--==================== SKILLS 2 ====================-->
          <div
            class="skills__content"
            :class="{ skills__open: skill2, skills__close: !skill2 }"
          >
            <div class="skills__header">
              <i class="uil uil-database skills__icon"></i>
              <div>
                <h1 class="skills__title">Database <br> engineer</h1>
                <span class="skills__subtitle">More than 1 years</span>
              </div>
              <i
                class="uil uil-angle-down skills__arrow"
                @click="changeSkill2"
              ></i>
            </div>
            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">MSSQL</h3>
                  <span class="skills__number">50%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mssql"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">MySQL</h3>
                  <span class="skills__number">50%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mysql"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Firebase</h3>
                  <span class="skills__number">50%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__firebase"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <!--==================== SKILLS 3 ====================-->
          <div
            class="skills__content"
            :class="{ skills__open: skill3, skills__close: !skill3 }"
          >
            <div class="skills__header">
              <i class="uil uil-swatchbook skills__icon"></i>
              <div>
                <h1 class="skills__title">Designer</h1>
                <span class="skills__subtitle">More than 1 years</span>
              </div>
              <i
                class="uil uil-angle-down skills__arrow"
                @click="changeSkill3"
              ></i>
            </div>
            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">TailwindCSS</h3>
                  <span class="skills__number">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__tailwind"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Bootstrap 4</h3>
                  <span class="skills__number">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__bootstrap"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Vuetify</h3>
                  <span class="skills__number">50%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__vuetify"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Vanilla CSS</h3>
                  <span class="skills__number">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__vanilla"></span>
                </div>
              </div>
            </div>
          </div>
          <!--==================== SKILLS 4 ====================-->
          <div
            class="skills__content"
            :class="{ skills__open: skill4, skills__close: !skill4 }"
          >
            <div class="skills__header">
              <i class="uil uil-desktop skills__icon"></i>
              <div>
                <h1 class="skills__title">Other <br>Languages</h1>
                <span class="skills__subtitle">More than 1 years</span>
              </div>
              <i
                class="uil uil-angle-down skills__arrow"
                @click="changeSkill4"
              ></i>
            </div>
            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">C#</h3>
                  <span class="skills__number">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__csharp"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Android Studio(Java)</h3>
                  <span class="skills__number">60%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__android"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Python</h3>
                  <span class="skills__number">50%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__python"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const skill1 = ref(false);
const skill2 = ref(false);
const skill3 = ref(false);
const skill4 = ref(false);
const changeSkill1 = () => {
  if (skill1.value == false) {
    skill1.value = true;
    skill2.value = false;
    skill3.value = false;
    skill4.value = false;
  } else {
    skill1.value = false;
  }
};
const changeSkill2 = () => {
  if (skill2.value == false) {
    skill2.value = true;
    skill1.value = false;
    skill3.value = false;
    skill4.value = false;
  } else {
    skill2.value = false;
  }
};
const changeSkill3 = () => {
  if (skill3.value == false) {
    skill3.value = true;
    skill1.value = false;
    skill2.value = false;
    skill4.value = false;
  } else {
    skill3.value = false;
  }
};
const changeSkill4 = () => {
  if (skill4.value == false) {
    skill4.value = true;
    skill1.value = false;
    skill3.value = false;
    skill2.value = false;
  } else {
    skill4.value = false;
  }
};
</script>

<style scoped>
.skills__container {
  row-gap: 0;
}
.skills__header {
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
}
.skills__icon,
.skills__arrow {
  font-size: 2rem;
  color: var(--first-color);
}
.skills__icon {
  margin-right: var(--mb-0-75);
}
.skills__title {
  font-size: var(--h3-font-size);
}
.skills__subtitle {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}
.skills__arrow {
  margin-left: auto;
  transition: 0.4s;
}

.skills__list {
  row-gap: 1.5rem;
  padding-left: 2.7rem;
}
.skills__titles {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
}
.skills__name {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
}
.skills__bar,
.skills__percentage {
  height: 5px;
  border-radius: 0.25rem;
}
.skills__bar {
  background-color: var(--first-color-lighter);
}
.skills__percentage {
  display: block;
  background-color: var(--first-color);
}
.skills__html {
  width: 90%;
}
.skills__css {
  width: 80%;
}
.skills__js {
  width: 60%;
}
.skills__vue {
  width: 85%;
}
.skills__mssql,
.skills__mysql,
.skills__firebase {
  width: 50%;
}
.skills__tailwind,
.skills__bootstrap {
  width: 70%;
}
.skills__vuetify {
  width: 50%;
}
.skills__vanilla {
  width: 80%;
}
.skills__csharp {
  width: 70%;
}
.skills__android {
  width: 60%;
}
.skills__python {
  width: 50%;
}
.skills__react {
  width: 35%;
}
.skills__close .skills__list {
  height: 0;
  overflow: hidden;
}
.skills__open .skills__list {
  height: max-content;
  margin-bottom: var(--mb-2-5);
}
.skills__open .skills__arrow {
  transform: rotate(-180deg);
}
@media screen and (max-width:350px) {
    .skills__title{
    font-size:var(--normal-font-size) ;
  }
}
@media screen and (min-width:582px) {
    .skills__container{
    grid-template-columns: repeat(2,2fr);
  }
}

</style>