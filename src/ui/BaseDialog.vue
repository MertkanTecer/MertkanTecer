<template>
<teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <dialog open v-if="show">
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
    </dialog>
</teleport>
</template>

<script setup>
import {defineEmits,defineProps} from 'vue'
const props = defineProps({
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
})
const emits = defineEmits(['close'])
const tryClose = ()=> {
    if(props.fixed)
    {
        return;
    }
    emits('close')
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: var(--z-modal);
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: var(--z-modal);
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: var(--body-color);
}

header {
  background-color: var(--first-color);
  width: 100%;
  padding: 1rem;
  font-family: var(--body-font);
}

header h2 {
  color: var(--title-color);
}

section {
  padding: 1rem;
  background-color: var(--body-color);
  color: var(--title-color);
  font-family: var(--body-font);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>