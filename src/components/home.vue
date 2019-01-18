<template>
  <div class="body">
    <navBar />
    <div class="lSidebar" ref="sidebar">
      <div class="pages"></div>
      <div class="groups"></div>
    </div>
    <div class="main">
      <post />
    </div>

    <div class="rSidebar"></div>
  </div>
</template>

<script>
import navBar from './navBar'
import post from './post'
export default {
  name: 'Home',
  components: {
    navBar,
    post
  },
  data () {
    return {
      navSearch: ''
    }
  },
  methods : {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-nav {
    position: fixed;
    background:#2c395e;
    top: 0px;
    left: 0px;
    height: 8%;
    width: 100%;
    z-index: 9;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .lSidebar {
    position: absolute;
    background: #EEEFF7;
    top: 8%;
    left: 0px;
    width: 20vw;
    height: 92%;
    z-index: 8;
    transition: 250ms linear;
    text-align: center;
  }

  .main {
    position: absolute;
    left: 20vw;
    top: 8vh;
    width: 55vw;
    min-height: 92%;
    overflow: auto;
    background: #EEEFF7;
  }

  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }

  .rSidebar {
    position: absolute;
    background: #EEEFF7;
    top: 8%;
    right: 0px;
    width: 25vw;
    height: 92%;
    z-index: 8;
    transition: 250ms linear;
    text-align: center;
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

</style>
