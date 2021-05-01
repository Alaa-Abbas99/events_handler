<template>
<div id="" >
    <h2 class="text-center"> Events Dashboard</h2> 

  

    <button class="btn btn-danger float-right" @click="signOut"> Sign Out </button>
    <hr>
    <AddEvent />
    <hr>
    <div class="col-sm-12">
        <div class="row">
        <EventItem 
        v-for="(event_item, i) in this.$store.state.events" :key="i"
        :event="event_item"
        />
    </div>

    </div>
    
    
    

</div>
</template>

<script>

import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default({
   
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },

    components: {
        AddEvent,
        EventItem,
    },
    mounted() {
        eventsRef.on('value', snap => {
            let events = []
            snap.forEach(event => {
                events.push(event.val())
            })
             console.log('events', events)
           this.$store.dispatch('setEvents', events)
          

    
        })
      
    }
})
</script>
