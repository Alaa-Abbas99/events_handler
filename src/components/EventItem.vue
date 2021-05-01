<template>
    <div class="col-md-4">
        <div class="card mt-3">
            <h4 class="card-header">{{event.title}}</h4>
            <div class="card-body">{{event.description}}</div>
            <ul class="list-group list-group-flush">
                
               <li class="list-group-item"> Date: {{event.date}}</li> 
                <li class="list-group-item"> Location: {{event.location}}</li> 
                <li class="list-group-item"> Organizer: {{event.email}}</li> 
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['event'],
    mounted(){
        console.log(this.event.title)
    }
}
</script>