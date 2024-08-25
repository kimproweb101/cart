<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ filteredDate(postItem.createdAt) }}      
      <i class="icon ion-md-create" @click="routeEditPage(postItem._id)"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>      
    </div>
  </li>
</template>
<script>
import { formatDate } from '@/utils/filters.js'
import { deletePost } from '@/api/posts.js';
export default {
  props:{
    postItem:{
      type:Object,
      required:true,
    }
  },  
  computed:{
    
  },
  methods : {
    filteredDate(_date) {
      return formatDate(_date)
    },
    async deleteItem(){
      if(confirm('You want to delete it?')){
        try {
          await deletePost(this.postItem._id)
          this.$emit('refresh')
        } catch (error) {
          console.log(error.response.data.message)
        }
      }
    },
    routeEditPage(postId){
      this.$router.push(`/post/${postId}`)
    }
  }
}
</script>