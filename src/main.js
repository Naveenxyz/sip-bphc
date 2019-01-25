// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAObAgrd8JXwGImpzHQs_ASR_lXHlANqWw',
      authDomain: 'sip-bphc.firebaseapp.com',
      databaseURL: 'https://sip-bphc.firebaseio.com',
      projectId: 'sip-bphc',
      storageBucket: 'sip-bphc.appspot.com',
      messagingSenderId: '505335552459'
    })
  }
})
