/* eslint-disable semi */
/* jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
import AddNotes from '@/components/AddNotes';
import MyNotes from '@/components/MyNotes';

// eslint-disable-next-line semi
Vue.use(Router);

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
});
