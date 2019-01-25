<template>
  <div class="navBody">
    <div class="top-nav elevation-3">
      <p class="logo" @click="$router.push('home')" style="flex: 2;color: white; cursor: pointer;font-family: Montserrat;align-content: center;font-size: 1.6rem;text-align: center;margin-top: 15px;font-weight: 500;word-spacing: 10px;letter-spacing: 1px;"> Social Net </p>
      <div class="searchBar" style="flex: 4;">
        <input type="text" name="search" class="navSerachInput" placeholder="Search" v-model="navSearch">
        <button class="navSearchBtn"><i class="bx bx-search-alt navSearchIcon" style="font-size: 1.5rem;"></i></button>
      </div>
      <div style="flex: 3"></div>
      <i class="material-icons navIcon" @click="$router.push('profile')" style="flex: 1">person</i>
      <i class="bx bx-message-detail navIcon" @click="$router.push('messages')" style="flex: 1"></i>
      <i class="bx bx-code navIcon" @click="$router.push('code')" style="flex: 1"></i>
      <i class="bx bx-horizontal-center navIcon" @click="$router.push('collab')" style="flex: 1"></i>
      <i class="material-icons navIcon" @click="$router.push('showcase')" style="flex: 1">collections</i>
      <i class="material-icons navIcon" @click="logout" style="flex: 1">power_settings_new</i>
      <i class="material-icons hiddenNavIcon" @click="toggleDisplay">menu</i>
    </div>
    <div class="rightSideBar elevation-3" v-if="this.openRSb" ref="rightSidebar"></div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'header',
  data () {
    return {
      navSearch: '',
      openRSb: false,
    }
  },
  methods : {
    logout () {
      var vm = this
      firebase.auth().signOut().then(
        resp => {
          alert('SignOut Succesful')
          vm.$router.push('login')
        }
      )
    },
    toggleDisplay () {
      this.openRSb = !this.openRSb
    }
  }
}
</script>

<style scoped>
  .top-nav {
    position: fixed;
    background:#2c395e;
    top: 0px;
    left: 0px;
    height: 8%;
    width: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0px;
  }

  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }

  .navSerachInput {
    all: unset;
    width: 70%; 
    margin-left: 10%;
    background: #EEEFF7;
    z-index: 999;
    color: #2c395e;
    height: 4vh;
    border-radius: 2px;
  }

  .navSearchBtn {
    all: unset;
    width: 10%;
    color: rgb(10, 12, 75);
    background: orange;
    height: 4vh;
    border-radius: 2px;
    transform: translateY(3px);
    cursor: pointer;
  }

  .navIcon {
    color: #EEEFF7;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .hiddenNavIcon {
    flex: 1;
    color: white;
    display: none;
  }

  .rightSideBar {
    position: fixed;
    top: 8vh;
    z-index: 999;
    background: orange;
    height: 92vh;
    width: 30vw;
    right: 0px;
    cursor: pointer;
  }

</style>
