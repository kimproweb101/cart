<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isUserLogin">by {{ $store.state.username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <!-- 1 -->
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          Logout
        </a>
      </template>
      <!-- 2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>
<script>
import {deleteCookie} from '@/utils/cookies'
export default{
  computed:{
    isUserLogin(){
      return this.$store.getters.isLogin
    },
    logoLink(){
      return this.$store.getters.isLogin ? '/main' : '/login'
    }
  },
  methods:{
    logoutUser(){      
      this.$store.commit('clearUsername')
      this.$store.commit('clearToken')
      deleteCookie('til_auth')
      deleteCookie('til_user')
      this.$store.commit('clearUsername')
      this.$router.push('/login')
    },    
  }
}
</script>
<style scoped>
header{display:flex;justify-content:space-between;border-bottom:1px solid #ccc;padding:10px;}
</style>