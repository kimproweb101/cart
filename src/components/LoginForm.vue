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
    <button type="submit" :disabled="!isUsernameValid || !password">로그인</button>
    <div>{{ logMessage }}</div>
  </form>
</template>

<script>
import {validateEmail} from '@/utils/validation'

export default {
  data() {
    return {
      username: 'test0002@gmail.com',
      password: 'test0002@gmail.com',
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
      try{
        const userData = {
          username: this.username,
          password: this.password,
        } 
        await this.$store.dispatch('LOGIN', userData)
        this.initForm()        
        this.$router.push('/main')
      }catch(error){
        this.logmessage=error.response.data
      }finally{
        this.initForm()
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style lang="scss" scoped></style>