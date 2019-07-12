<template>
  <div>
    <!--Navigation bar-->
    <nav class="navbar navbar-expand-lg  fixed-top navbar-dark" style="background-color:#64c746;">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Notes</a>
        </div>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="nav navbar-nav ">
            <li class="nav-item">
              <router-link class="nav-link" style="color:white;" :to="{ name: 'MyNotes', params: {} }">My Notes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" style="color:white;" :to="{ name: 'AddNotes', params: {} }">Add Notes</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped></style>
</style>
