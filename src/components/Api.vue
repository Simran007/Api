<template>
	<div>

		<div><button v-on:click="posts">
			fetch posts
		</button></div>

	<div>  <button v-on:click="todos">
			fetch todos
		</button> </div>
		<div>  <button v-on:click="posts1">
			fetch posts1comments
		</button> </div>

<div>  <button v-on:click="commentspostid1">
			fetch comments-postid1
		</button> </div>
	<div>  <button v-on:click="postpost">
			fetch postbypost
		</button> </div>
		<div>  <button v-on:click="postsbyput">
			fetch postbyput
		</button> </div>	
      <div>  <button v-on:click="postsbypatch">
			fetch postsbypatch
		</button> </div>	
		<div>  <button v-on:click="postsbydelete">
			fetch postsbydelete
		</button> </div>
        <div> <h1>{{title}}</h1>
         </div>
	<div> 

 
</div>

  <div> 
  	<table>
	<caption>users title</caption>
	<th>
		<tr>
			<td>
			ID	
			</td>
			<td>
				Title
			</td>
		</tr>
	</th>
	<tbody>

		<tr v-for="singlePost in post1">
			<td v-if="singlePost.id<=5">
				{{singlePost.id}}
			</td>
			<td>
				{{singlePost.title}}
			</td>
			<td>
				{{singlePost.body}}
			</td>
		</tr>

       <tr v-for="everyPost in todos1">
       
       	<td v-if="everyPost.id%3==0">
       	 {{everyPost.id}}
       	  </td>

       	<td>
       		{{everyPost.title}}
       		
       	</td>
       	
      

       	</tr>


       <tr v-for="eachPost in comments1">
       
       	<td>
       	 {{eachPost.id}}
       	  </td>

       	<td>
       		{{eachPost.title}}
       		
       	</td>
       	
       	<td>
       		{{eachPost.name}}
       	</td>

       	</tr>



 <tr v-for="eachPost in postId1">
       
       	<td>
       	 {{eachPost.id}}
       	  </td>

       	<td>
       		{{eachPost.title}}
       		
       	</td>
       	
       	<td>
       		{{eachPost.name}}
       	</td>

       
     </tr>


       
       		




	    </tbody>
</table>
 
   </div>
   	</div>	

</div>
</template>

  
<script>
    import css from 'bulma'
	import axios from 'axios'
	export default {
      name:'rats',
      data(){
      	return {
      		title:'this is the list of users',

      		post1:[],
      		todos1:[],
      		comments1:[],
      		postId1:[]
      	}
      },
     
       methods:{
     	  posts:function(){
      
       	  /*fet*/
var self = this
       axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(function(response){
             console.log(response)
             self.$data.post1=response.data
             console.log(self.$data.post1)
            
         })
         .catch(function(error){
         			console.log(error)
         })
        },

        todos:function(){
      
       	  /*fe*/
var self = this
       axios.get('https://jsonplaceholder.typicode.com/todos')
         .then(function(response){
             console.log(response)
             self.$data.todos1=response.data
             console.log(self.$data.todos1)
            
         })
         .catch(function(error){
         			console.log(error)
         })
         },

          posts1:function(){
      
       	  /*fe*/
var self = this
       axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
         .then(function(response){
             console.log(response)
              self.$data.comments1=response.data
             console.log(self.$data.comments1)
            
         })
         .catch(function(error){
         			console.log(error)
         })
         },

          postpost:function(){
      
       	  /*fe*/

       axios.post('https://jsonplaceholder.typicode.com/posts')
         .then(function(response){
             console.log(response)
            
         })
         .catch(function(error){
         			console.log(error)
         })
         },

         commentspostid1:function(){
      
       	  /*fe*/
var self = this
       axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
         .then(function(response){
             console.log(response)
              self.$data.postId1=response.data
             console.log(self.$data.postId1)
            
         })
         .catch(function(error){
         			console.log(error)
         })
         },

         postsbyput:function(){
      
       	  /*fe*/

       axios.put('https://jsonplaceholder.typicode.com/posts/1')
         .then(function(response){
             console.log(response)
            
         })
         .catch(function(error){
         			console.log(error)
         })
         },

         postsbypatch:function(){
      
       	  /*fe*/

       axios.patch('https://jsonplaceholder.typicode.com/posts/1')
         .then(function(response){
             console.log(response)
            
         })
         .catch(function(error){
         			console.log(error)
         })
         },

         postsbydelete:function(){
      
       	  /*fe*/

       axios.delete('https://jsonplaceholder.typicode.com/posts/1')
         .then(function(response){
             console.log(response)
            
         })
         .catch(function(error){
         			console.log(error)
         })
         }, 

    }
}



	






</script>


<style scoped>
	div {
		background-color: yellow;
		color: red;
	}
    th,td {
    	 padding:15px;
    }

</style>