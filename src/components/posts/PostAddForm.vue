<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">title</label>
          <input type="text" id="title" v-model="title">
        </div>
        <div>
          <label for="contents">content</label>
          <textarea id="contents" type="text" v-model="contents" rows="5" />
          <p class="validation-text warning" v-show="!isContentsValid">Contents must be less than 250</p>
        </div>
        <div>
          <button type="submit" :disabled="!isContentsValid||!this.title||!this.contents">create</button>
        </div>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div> 
</template>
<script>
import {createPost} from '@/api/posts.js'
export default {
  components: {},
  data() {
    return {
      title: '',
      contents:'',
      logMessage:''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  computed:{
    isContentsValid(){
      return this.contents.length <=200
    },    
  },
  methods: {
    async submitForm(){
      try{
        const postData={
          title:this.title,
          contents:this.contents
        }
        await createPost(postData) 
        this.logMessage='글이 등록 되었습니다.'
        this.$router.push('/main')
      }catch(error){        
        this.logMessage=error.response.data.message
      }
    }
  }
}
</script>
<style scoped>
.form-wrapper .form{width:100%;}
.btn{color:white;}
</style>