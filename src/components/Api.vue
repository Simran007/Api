<template>
	<div>
		<button v-on:click="posts">
			fetch posts
		</button>

		v-for="post in posts"

		{{post.title}}
		{{p}}
	</div>
</template>


<script>

	import axios from 'axios'
	export default {
      name:'rats',
      data() {
      	return {
      		posts: []
      	}
      }
      methods:{
       posts:function(){
       	  /*fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))*/

         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(function(response){
             console.log(response.data)
             this.$data.posts = response.data
         })
         .catch(function(error){
         			console.log(error)
         })
         

       }
      }
  }
	
</script>