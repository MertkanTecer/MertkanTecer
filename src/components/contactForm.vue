<template>
    <form action="" class="contact__form grid">
          <div class="contact__inputs grid">
            <div class="contact__content" :class="{'isvalid':!userName.isValid}">
              <label for="Name" class="contact__label">Name</label>
              <input v-model.trim="userName.value" type="text" id="Name" @blur="validation" class="contact__input" />
              <span v-if="!userName.isValid" class="contact__label error">Please enter name !</span>
            </div>
            <div class="contact__content" :class="{'isvalid':!Email.isValid}">
              <label for="Email" class="contact__label">Email</label>
              <input v-model.trim="Email.value" @blur="validation" type="email" id="Email" class="contact__input" />
              <span v-if="!Email.isValid" class="contact__label error">Please enter valid Email !</span>
            </div>
            <div class="contact__content" :class="{'isvalid':!Project.isValid}">
              <label for="Project" class="contact__label">Project</label>
              <input v-model.trim="Project.value" @blur="validation" id="Project" type="text" class="contact__input" />
              <span v-if="!Project.isValid" class="contact__label error">Please enter Project !</span>
            </div>
            <div class="contact__content" :class="{'isvalid':!Message.isValid}">
              <label for="Message" class="contact__label">Message</label>
              <textarea
                v-model.trim="Message.value"
                name=""
                @blur="validation"
                id="Message"
                cols="0"
                rows="7"
                class="contact__input"
              ></textarea>
              <span v-if="!Message.isValid" class="contact__label error">Please enter Message !</span>
            </div>

            <div>
              <a @click="sendUser" class="button button-pointer button--flex">
                Send Message
                <i class="uil uil-message button__icon"></i>
              </a>
            </div>
            <div>
            <span v-if="!Validate"> You should Enter Valid Informations. </span>
            </div>
          </div>
        </form>
</template>

<script setup>
import {ref } from 'vue'
import { defineEmits } from 'vue';
const emits = defineEmits(['send-contact'])
const userName = ref({
    value:'',
    isValid:true
});
const Email = ref({
    value:'',
    isValid:true
});
const Project = ref({
    value:'',
    isValid:true
});
const Message = ref({
    value:'',
    isValid:true
});
const Validate = ref(true)

const validation = () => {
    if(userName.value.value == '')
    {
        userName.value.isValid = false;
        Validate.value = false
    }
    else {
        userName.value.isValid = true
    }
    if(Email.value.value == '' || !Email.value.value.includes('@'))
    {
        Email.value.isValid = false;
        Validate.value = false
    }
    else {
        Email.value.isValid = true
    }
    if(Project.value.value == '')
    {
        Project.value.isValid = false;
        Validate.value = false
    }
    else {
        Project.value.isValid = true
    }
    if(Message.value.value == '')
    {
        Message.value.isValid = false;
        Validate.value = false
    }
    else {
        Message.value.isValid = true
    }
}
const sendUser = () => {
    Validate.value = true
    validation();
    console.log(Validate.value);
    if(Validate.value == false)
    {
        return;
    }
    Validate.value = true
    const newUser = {
        Name:userName.value.value,
        Email:Email.value.value,
        Project:Project.value.value,
        Message:Message.value.value
    }
    emits('send-contact',newUser)
    userName.value.value = ''
    Email.value.value = ''
    Project.value.value = ''
    Message.value.value = ''

}
</script>

<style scoped>
.error {
    width: 100%;
    color: black;
    font-family: var(--body-font);
    font-size: var(--smaller-font-size);
    text-decoration:underline;
}

.contact__content {
  background-color: var(--input-color);
  border-radius: 0.5rem;
  border: 1px solid rgb(218, 203, 218);
  padding: 0.75rem 1rem 0.25rem;
}
.isvalid {
    border:1.7px solid rgb(117, 9, 23);
}
.contact__label {
  font-size: var(--smaller-font-size);
  color: var(--title-color);
}
.button-pointer{
    cursor: pointer;
}
.contact__input {
  width: 100%;
  background-color: var(--input-color);

  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
}
@media screen and (min-width:1024px) {
    .contact__form{
    width: 460px;
  }}
</style>