<template>
<div id="">
    <h3> Add an Event <input type="checkbox" v-model="showForm"></h3> 
    <div class="form" v-if="showForm">
        <div class="form-group">
        <label>Title </label>
        <input type="text" placeholder="title" class="form-control" v-model="event.title">
        </div>
        <div class="form-group">
            <label>Description </label>
            <input type="text" placeholder="description" class="form-control" v-model="event.description">
        </div>
        <div class="form-group">
            <label>Date </label>
            <input type="date" placeholder="date" class="form-control" v-model="event.date">
        </div>
        <div class="form-group">
            <label>Location </label>
            <input type="text" placeholder="location" class="form-control" v-model="event.location">
        </div>
        
        <button class="btn btn-primary" @click="addEvent">Submit</button>
    </div>
    
   
    <br>
</div>
</template>
<script>
import { eventsRef } from '../firebaseApp'

export default ({
   data(){
       return {
           event: {
               title: '',
               description: '',
               date: '',
               location: '',
               email: '',
           },
           showForm: false 
       }
   },

   methods: {
       addEvent(){
           this.event.email = this.$store.state.user.email
             eventsRef.push(this.event)
       }
   }
})
</script>