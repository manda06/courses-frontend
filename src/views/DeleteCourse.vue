<template>
    <div>
      <H1>Delete Course</H1>
     <!--<h4>Delete {{ todo.name }}  ?</h4>--> 
      <button v-on:click="deleteCourse()">Delete</button>
      <button v-on:click="cancel()">Cancel</button>
    </div>
  </template>
  
  <script>
  import courseServices from '@/services/courseServices.js'
  
  export default {
    props: ['id'],
  
    data() {
      return {
        course: Object,
        
      }
    },
    created() {
      
      courseServices.getList(this.id) 
        .then(response => {
          this.course = response.data.list
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
  
    methods: {
      deleteCourse() {
       courseServices.deleteList(this.id)
          
          .then(response => {
            this.errors = response.data
            this.$router.push({ name: 'list' })
          })
          .catch(error => {
            this.errors = error.data
          })
      
      },
      cancel() {
        this.$router.push({ name: 'list' })
      },
      
    }
  }
  </script>
  
  <style></style>