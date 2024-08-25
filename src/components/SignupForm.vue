<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">username:</label>
      <input type="text" id="username" placeholder="username" v-model="username">
    </div>
    <div>
      <label for="password">password:</label>
      <input type="text" id="password" placeholder="password" v-model="password">
    </div>
    <div>
      <label for="nickname">nickname:</label>
      <input type="text" id="nickname" placeholder="nickname" v-model="nickname">
    </div>
    <button type="submit" :disabled="!isUsernameValid || !password || !nickname">회원 가입</button>
    <div>
      {{ logMessage }}
    </div>
  </form>
</template>
<script>
import {validateEmail} from '@/utils/validation'
import { registerUser } from '@/api/auth.js';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    }
  },
  computed:{
    isUsernameValid(){
      return validateEmail(this.username)
    }
  },
  methods: {
    async submitForm() {
      console.log('signup')
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      }
      const { data } = await registerUser(userData)
      console.log(data.username)
      this.logMessage = `${data.username}님이 가입되었습니다`
      this.initForm()
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    }
  }
}
</script>
<style lang="scss" scoped></style>