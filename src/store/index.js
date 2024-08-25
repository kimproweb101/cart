
import { createStore } from 'vuex'
import {getAuthFromCookie, getUserFromCookie,saveAuthToCookie,saveUserToCookie} from '@/utils/cookies.js';
import {loginUser} from '@/api/auth'


export const store = createStore({
  state () {
    return {
      username:getUserFromCookie() || '',
      token:getAuthFromCookie() || '',
    }
  },
  getters:{
    isLogin(state){
      return state.username!=='';
    }
  },
  mutations: {
    setUsername (state, username) {
      state.username=username;
    },
    clearUsername(state){
      state.username='';
    },
    setToken(state,token){
      state.token=token
    },
    clearToken(state){
      state.token='';
    }
  },
  actions:{
    async LOGIN({commit},userData){
      const { data } = await loginUser(userData)
        commit('setUsername', data.user.username )
        commit('setToken', data.token)
        saveAuthToCookie(data.token)
        saveUserToCookie(data.user.username)
        return data
    }
  }
})
