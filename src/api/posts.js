import {posts} from './index'

// 학습 노트 데이터 조회 API
function fetchPost(postId){
  return posts.get(`${postId}`)
}

function fetchPosts(){
  return posts.get('/')
}

function createPost(postData){
  return posts.post('/', postData)
}

function deletePost(postId){
  return posts.delete(postId)
}

function editPost(postId,postData){
  return posts.put(postId, postData)
}


export {fetchPost,fetchPosts, createPost, deletePost,editPost}
