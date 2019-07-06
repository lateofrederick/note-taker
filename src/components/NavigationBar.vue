<template>
  <div>
    <!--Navigation bar-->
    <header>
      <nav id="nav-items">
        <router-link class="navigate" to="/add-notes">Add Notes</router-link>
        <router-link class="navigate" to="/">My Notes</router-link>
      </nav>
    </header>
  </div>
</template>


<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    align-items:center;
    box-shadow: 0 0 25px 0 black;
  }

  header * {
    display: inline;
  }

  header nav {
    text-align: right;
  }

  .navigate {
    margin: 10px;
    text-decoration: none;
  }
</style>

