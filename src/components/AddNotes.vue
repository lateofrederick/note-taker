<template>
  <div class="add-notes">
    <h1>Add Notes</h1>
    <div>
      <label for="title" id="title-label">Title:</label>
      <input type="text" name="title" v-model="note.title" size="35"><br><br>
      <label for="content" id="content-label">Content:</label>
      <textarea name="content" v-model="note.content" id="note-content" cols="29" rows="10"></textarea>
    </div>
    <button v-on:click="addnotes" id="AddNotes">Add Notes</button>
  </div>
</template>

<script>
//importing the firebase instance created in the firebase.js file
import { db }  from '../config'

export default {
  name: 'AddNotes',
  data () {
    return {
      note: {
        title: "",
        content: "",
      },
      date:""
    }
  },
  methods: {
    addnotes: function(){
      //Read the system date anytime any note is added
      //to keep track of the added date
      var currentDate = new Date();
      this.date = currentDate.toJSON().slice(0,10).toString();

    //  Add the note and the date to a firebase database
      db.collection('notes').add({
        note: this.note,
        date: this.date
      }).then(function(docRef){
        console.log("Note added with id " + docRef.id);
      }).catch(function(error){
        console.error(error);
      })
    }
  }
}
</script>


<style scoped>
  div .add-notes {
   margin: 60px 400px;
  }

 #title-label {
    padding-right: 35px;
  }

  #content-label {
    padding-right: 15px;
  }

  #AddNotes {
    margin-left: 220px;
    margin-top: 15px;
    background-color: #64c746;
    color: white;
    font-size: 16px;
    border-radius: 2px;
  }

  h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 100px;
  }
</style>
