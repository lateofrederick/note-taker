<template>
  <div class="my-notes">
    <h1>Notes</h1>
    <div v-for="(anote,idx) in notes" :key="idx" class="card  mb-3" style="width:30rem;">
      <div class="card-body">
        <h5 class="card-title">{{anote.noteinfo.data().note.title}}</h5>
        <p class="card-text">{{anote.noteinfo.data().note.content}}</p>
        <p class="card-text">{{anote.noteinfo.data().date}}</p>
        <div class="text-right">
          <p @click="deletenote(anote.noteinfo.id)" class="btn text-white" style="background-color:#64c746">Delete</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//importing the firebase instance
import { db } from '../config'


let self = this;

export default {
  name: "MyNotes",
  components: {
  },
  data() {
    return {
      notes: [],
      Notes: {}
    }
  },
  methods: {
    // implementing a method to delete note
    deletenote(id) {
      if(confirm("Do you want to delete note")){
        db.collection('notes').doc(id).delete().then(function(data){
          window.location = window.location
        })
        console.log("note removed");
     }else {
       // do nothing
     }
      }
  },
  mounted() {
    //Retrieve notes from firebase after mounted instance
     db.collection('notes').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.notes.push({noteinfo:doc});
        })
      })
    }
  }


</script>

<style scoped>
div .my-notes {
 margin: 60px 400px;
}

h1 {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 100px;
}
</style>
