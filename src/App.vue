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
