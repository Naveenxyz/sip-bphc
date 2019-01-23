<template>
  <div class="body">
    <navBar />
    <div class="lSidebar" ref="sidebar">
      <div class="forums">
        <span style=""><h2> Forums <i class="bx bx-chevron-down" style="transform: scale(1.5, 1.5) translateX(10px);cursor: pointer;"></i> </h2>  </span>
      </div>
      <div class="groups">
        <span><h2> Groups <i class="bx bx-chevron-down"  style="transform: scale(1.5, 1.5) translateX(10px);cursor: pointer;"></i> </h2></span>
      </div>
      <div class="people">
        <span><h2> People <i class="bx bx-chevron-down"  style="transform: scale(1.5, 1.5) translateX(10px);cursor: pointer;"></i> </h2></span>
      </div>
    </div>
    <div class="main">
      <post />
      <div class="fCard elevation-1">
        <div class="fCardHeader"></div>
      </div>
    </div>

    <div class="rSidebar">
      <div class="card elevation-5">
        <h2 class="cardHeader">Hackathon</h2>
        <p class="cardBody"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? </p>
        <button class="cardBtn elevation-3"> Visit The Contest </button>
      </div>
      <div class="card elevation-5">
        <h2 class="cardHeader">Hackathon  2</h2>
        <p class="cardBody"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? </p>
        <button class="cardBtn elevation-3"> Visit The Contest </button>
      </div>
    </div>
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
    background: #dddddd;
    top: 10%;
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
    top: 10%;
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

  .card {
    width: 80%;
    margin-left: 10%;
    min-height: 20vh;
    margin: 20px;
    background: whitesmoke;
    border-radius: 5px;
    text-align: left;
  }

  .cardHeader {
    padding: 30px;
    color: #2c395e;
  }

  .cardBody {
    padding: 30px;
  }

  .cardBtn {
    padding: 15px 40px 15px 40px;
    margin-left: 30px;
    background: #2c395e;
    color: white;
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: 12px;
  }
  .forums {
    margin-top: 30px;
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
  }

  .forums span h2{
    padding: 20px;
    color: #2c395e;
  }

  .groups {
    margin-top: 30px;
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
  }

  .groups span  h2{
    padding: 20px;
    color: #2c395e;
  }

  .people {
    margin-top: 30px;
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
  }

  .people span  h2{
    padding: 20px;
    color: #2c395e;
  }

  .fCard {
    width: 80%;
    margin-left: 10%;
    min-height: 40vh;
    background: whitesmoke;
    border-radius: 5px;
    text-align: left;
  }

  .fCardHeader {
    background: #2c395e;
    height: 8vh;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

</style>
