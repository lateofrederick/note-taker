<template>
  <div class="add-notes">
    <h1>Add Notes</h1>
    <div>
      <label for="title" id="title-label">Title:</label>
      <input type="text" name="title" size="35"><br><br>
      <label for="content" id="content-label">Content:</label>
      <textarea name="content" id="note-content" cols="29" rows="10"></textarea>
    </div>
    <button id="AddNotes">Add Notes</button>
  </div>
</template>

<script>
export default {
  name: 'AddNotes',
  data () {
    return {
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
    background-color: green;
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
