<<<<<<< HEAD
<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import AddNotes from './components/AddNotes'
import NavigationBar from './components/NavigationBar'

export default {
  name: 'App',
  components: {
    'Navigation': NavigationBar
  }
}
</script>

<style>

</style>
||||||| merged common ancestors
=======
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
>>>>>>> cc41daa3bb1e5de003e4434ff1b0cd37a389debb
