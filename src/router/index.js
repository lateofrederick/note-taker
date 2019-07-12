<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
import AddNotes from '@/components/AddNotes'
import MyNotes from '@/components/MyNotes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyNotes',
      component: MyNotes
    },
    {
      path: '/add-notes',
      name: 'AddNotes',
      component: AddNotes
    }
  ],
  mode: 'history'
})
||||||| merged common ancestors
=======
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
>>>>>>> cc41daa3bb1e5de003e4434ff1b0cd37a389debb
