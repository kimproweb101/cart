<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>   
      <LoadingSpinner v-if="isLoading">Loading...</LoadingSpinner>      
      <ul v-else>
        <PostListItem v-for="postItem in postItems" :key="postItem._id" :postItem="postItem" @refresh="fetchData"></PostListItem>
      </ul>    
    </div>
    <router-link to="/add" class="create-button"><i class="ion-md-add"></i></router-link>
  </div>
</template>
<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import {fetchPosts} from '@/api/posts';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
export default {
  components: {PostListItem,LoadingSpinner},
  data() {
    return {
      postItems: '',
      isLoading:false
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async fetchData(){
      try{
        this.isLoading=true;
        const {data}=await fetchPosts()
        this.isLoading=false;
        this.postItems=data.posts        
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>