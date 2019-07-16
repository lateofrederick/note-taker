<template>
  <div class="my-notes">
    <h1>Notes</h1>
    <div v-for="(anote,idx) in notes" :key="idx" class="card  mb-3" style="width:30rem;">
      <div class="card-body">
        <h5 class="card-title">{{anote.note.title}}</h5>
        <p class="card-text">{{anote.note.content}}</p>
        <p class="card-text">{{anote.date}}</p>
        <div class="text-right">
          <p class="btn text-white" style="background-color:#64c746">Delete</p>
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
  },
  mounted() {
    //Retrieve notes from firebase after mounted instance
     db.collection('notes').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.notes.push(doc.data());
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
