<template>
    <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">Mertkan</a>
      <div class="nav__menu" id="nav-menu" :class="{ 'show-menu': !showMenu }">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link" @click="(showMenu = true)"
              ><i class="uil uil-estate nav__icon"></i> Home</a
            >
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link" @click="(showMenu = true)"
              ><i class="uil uil-user nav__icon"></i> About
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link" @click="(showMenu = true)"
              ><i class="uil uil-file-info-alt nav__icon"></i> Skills
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link" @click="(showMenu = true)"
              ><i class="uil uil-briefcase-alt nav__icon"></i> Services
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link" @click="(showMenu = true)"
              ><i class="uil uil-scenery nav__icon"></i> Portfolio
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link" @click="(showMenu = true)"
              ><i class="uil uil-message nav__icon"></i> Contact
            </a>
          </li>
        </ul>
        <i
          class="uil uil-times nav__close"
          @click="(showMenu = true)"
          id="nav-close"
        ></i>
      </div>
      <div class="nav__btns">
      <!-- Theme Change Button -->
      <i class="uil uil-moon change-theme" v-if="setTheme" @click="changeTheme(setTheme=true)" id="theme-button"></i>
      <i class="uil uil-sun change-theme" v-else  @click="changeTheme(setTheme=false)" id="theme-button"></i>
        <div class="nav__toggle" id="nav-toggle" @click="showMenu = !showMenu">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const showMenu = ref(true);
const setTheme = ref(false)
const changeTheme = (theme) => {
  const el = document.body.classList
  if(theme == true)
  {
    el.add('dark-theme')
  }
  else
  {
    el.remove('dark-theme')
  }
}
</script>

<style scoped>
/*========== Button Dark/Light ==========*/
.nav__btns{
  display: flex;
  align-items: center;
}

.change-theme{
  font-size:1.25rem;
  color: var(--title-color);
  margin-right: var(--mb-1);
  cursor: pointer;
}
.change-theme:hover{
  color: var(--first-color);
}
.header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
}

/*==================== NAV ====================*/
.nav {
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo,
.nav__toggle {
  color: var(--title-color);
  font-weight: var(--font-medium);
}
.nav__logo:hover {
  color: var(--first-color);
}
.nav__toggle {
  font-size: 1.1rem;
  cursor: pointer;
}
.nav_toggle:hover {
  color: var(--first-color);
}

@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    transition: 0.3s;
  }
}
.nav__list {
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
}
.nav__link:hover {
  color: var(--first-color);
}
.nav__icon {
  font-size: 1.2rem;
}
.nav__close {
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color);
}
.nav__close:hover {
  color: var(--first-color-alt);
}
/* show menu */
.show-menu {
  bottom: 0;
}
/* Active link */
.active-link{
  color: var(--first-color);
}
@media screen and (max-width:350px){
    .nav__menu{
    padding:2rem .25rem 4rem
  }
  .nav__list{
    column-gap: 0;
  }
}
@media screen and (min-width:582px){
    
}
@media screen and (min-width:768px){
    .header{
    padding: 0 1rem;
  }
  .header{
    top:0;
    bottom: initial;
  }
  .nav{
    height:calc(var(--header-height)+1.5rem);
    column-gap: 1rem;
  }
  .nav__icon,
  .nav__close,
  .nav__toggle{
    display: none;
  }
  .nav__list{
    display: flex;
    column-gap: 2rem;
  }
  .nav__menu{
    margin-left: auto;
  }
  .change-theme{
    margin: 0;
  } 
}
@media screen and (min-width:1024px){
    .header{
    padding: 0;
  }
}
</style>