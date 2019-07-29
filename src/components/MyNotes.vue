<template>
  <div class="my-notes" style="margin-top:80px;">
    <div id="cardid" class="card" style="width:40rem;">
      <div class="card-header">
        Notes
      </div>
      <div class="card-body">
        <div v-for="(anote,idx) in notes" :key="idx" class="card  mb-3" style="width:30rem; margin-left: 55px">
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
#cardid {
 margin: 0 auto;
 width: 90%;

}


</style>
