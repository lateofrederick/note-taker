<template>
  <div class="add-notes">
    <h1>Add Notes</h1>
    <form class="note-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" value="" v-model="note.title" class="form-control" id="title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea name="content" class="form-control" v-model="note.content" id="content" rows="8"></textarea>
      </div>
    </form>
    <button v-on:click="addnotes" class="btn" style="background-color:#64c746;color:white" name="button">Add notes</button>
  </div>
</template>

<script>
//importing the firebase instance created in the firebase.js file
import { db }  from '../config'


export default {
  name: 'AddNotes',
  components: {
  },
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
