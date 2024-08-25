<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
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
          <button type="submit" :disabled="!isContentsValid || !this.title || !this.contents">edit</button>
        </div>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>
<script>
import { fetchPost, editPost } from '@/api/posts.js'
export default {  
  data() {
    return {
      title: '',
      contents: '',
      logMessage: ''
    }
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200
    },
  },
  created() { 
    this.getPost()
  },
  methods: {
    async getPost(){
      const { data } = await fetchPost(this.$route.params.id)
      this.title=data.title
      this.contents = data.contents
    },
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents
        }
        await editPost(this.$route.params.id,postData)        
        this.$router.push('/main')
      } catch (error) {
        console.log(error)
        this.logMessage = error
      }
    }
  }
}

</script>
<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>