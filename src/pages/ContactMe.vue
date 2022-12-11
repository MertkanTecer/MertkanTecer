<template>
    <section class="contact section" id="contact">
      <base-dialog :show="showDialogue" :title="dialogueTitle" @close="handleError">
      <p>{{ submitMessage }}</p>
      <p>Name : {{showDialogues.Name}}</p>
      <p>Email : {{showDialogues.Email}}</p>
      <p>Project : {{showDialogues.Project}}</p>
    </base-dialog>
      <h2 class="section__title">Contact Me</h2>
      <span class="section__subtitle">Get in touch</span>
      <div class="contact__container container grid">
        <contact-info></contact-info>
        <contact-form @send-contact="sendUser" ></contact-form>
      </div>
    </section>
</template>

<script setup>
import contactForm from '../components/contactForm.vue';
import contactInfo from '../components/contactInfo.vue';
import {useStore} from 'vuex'
import {ref,computed} from 'vue'
const showDialogue = ref(false)
const submitMessage = ref('')
const dialogueTitle = ref('')
const store = useStore();
const handleError = () => {
      showDialogue.value = false;
    }
const showDialogues = computed(()=> {
  return store.getters.getUser
})
const sendUser = async (user) => {
const newUser = {
  ...user,
  id:new Date().getTime().toString()
}
try {
  await store.dispatch('sendUser',newUser)
  dialogueTitle.value = 'Success !'
  submitMessage.value = 'Successfully Sent Contact Request ! '
}catch (error) {
  dialogueTitle.value = 'An Error Occured !'
 submitMessage.value = error || 'Failed To Send Contact Info.'
}
showDialogue.value = true;
}
</script>
<style scoped>
/*==================== CONTACT ME ====================*/
.contact__container {
  row-gap: 3rem;
}
p {
  margin-bottom: var(--mb-0-75);
}
@media screen and (min-width:1024px) {
    .contact__container{
    grid-template-columns: repeat(2,1fr);
  }
}
</style>