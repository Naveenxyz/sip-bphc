<template>
  <div class="body">
    <navBar />
    <div class="lSideBar" ref="sidebar">
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
      <div class="fCard elevation-1" :key="sPost.Id in posts" v-for="sPost in posts">
        <div class="fCardHeader">
          <p class="fCardHeaderTitle">By <strong style="margin-left: 15px;">{{sPost.postedBy}}</strong> </p>
          <p class="fCardHeaderSub">{{sPost.subForum}}</p>
        </div>
        <div class="fCardBody">
          <p class="fCardBodyText">{{sPost.bodyText}}</p>
        </div>
        <div class="fCardFooter">
          <div class="fCardFooterUpvotes" style="flex: 1;">
            <span style="text-align: center;">
              <i class="material-icons" style="color: white;float: left;margin-left: 30px;font-size: 20px;transform: translateY(3px);">thumb_up</i>
              <p style="float: left;margin-left: 15px;color: white;transform: translateY(5px);">100 <small>upvotes</small></p>
            </span>
          </div>
          <div class="fCardFooterDownvotes" style="flex: 1;">
            <span style="text-align: center;">
              <i class="material-icons" style="color: white;float: left;margin-left: 30px;font-size: 20px;transform: translateY(3px);">thumb_down</i>
              <p style="float: left;margin-left: 15px;color: white;transform: translateY(5px);">100 <small>downvotes</small></p>
            </span>
          </div>
          <div style="flex: 1;"></div>
          <div class="fCardFooterComment" style="flex: 1;">

          </div>
        </div>
        <div class="fcardComment"></div>
      </div>
    </div>
    
    <div class="rSidebarP">
      <div class="card">
        <h2 class="cardHeader">Hackathon</h2>
        <p class="cardBody"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? </p>
        <button class="cardBtn elevation-3"> Visit The Contest </button>
      </div>
      <div class="card">
        <h2 class="cardHeader">Hackathon  2</h2>
        <p class="cardBody"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? </p>
        <button class="cardBtn elevation-3"> Visit The Contest </button>
      </div>
    </div>
    <div class="rSidebarS"></div>
  </div>
</template>

<script>
import navBar from './navBar'
import post from './post'
import * as firebase from 'firebase'
export default {
  name: 'Home',
  components: {
    navBar,
    post
  },
  data () {
    return {
      navSearch: '',
      posts: [
        {
          postedBy: 'vamsi',
          Id: 'asd',
          subForum: 'SubForum',
          upvotes: '100',
          downvotes: '100',
          bodyText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio?',
          bodyImg: ''
        },
        {
          postedBy: 'vamsi',
          Id: 'asdasd',
          subForum: 'SubForum 2',
          upvotes: '101',
          downvotes: '101',
          bodyText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi om5ugtregvteg3gwv53g nis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum odit aut quos modi omnis aspernatur, unde provident quis repellat error, ullam, itaque necessitatibus numquam eaque atque consequatur autem optio? ',
          bodyImg: ''
        }
      ]
    }
  },
  methods : {
  },
  beforeCreate () {
    var vm = this
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        vm.$router.push('login')
      } else {
        console.log('Auth Checked')
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lSideBar {
    position: fixed;
    background: orange;
    top: 8%;
    left: 0px;
    width: 15vw;
    height: 92%;
    z-index: 8;
    transition: 250ms linear;
    text-align: center;
  }

  .main {
    position: absolute;
    left: 15vw;
    top: 8vh;
    width: 45vw;
    min-height: 92%;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }

  .rSidebarP {
    position: absolute;
    top: 8%;
    right: 15vw;
    width: 25vw;
    height: 92%;
    z-index: 8;
    transition: 250ms linear;
    text-align: center;
  }

  .rSidebarS {
    position: fixed;
    top: 8%;
    right: 0vw;
    width: 15vw;
    min-height: 92%;
    z-index: 8;
    transition: 250ms linear;
    text-align: center;
    background: orange;
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
    width: 90%;
    min-height: 20vh;
    margin: 20px 5% 20px 5%;
    background: whitesmoke;
    border-radius: 15px;
    text-align: left;
    -webkit-animation: boxShadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	      animation: boxShadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
    background: orange;
    color: #444444;
    font-weight: 900;
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
    margin-top: 50px;
    margin-bottom: 50px;
    min-height: 20vh;
    background: whitesmoke;
    border-radius: 5px;
    text-align: left;
  }

  .fCardHeader {
    background: #2c395e;
    height: 6vh;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fCardHeader p{
    flex: 1;
    color: white;
    font-size: 15px;
    padding-left: 30px;
    max-width: 50%;
    transform: translateY(5px);
  }
  .fCardHeaderSub {
    text-align: right;
    padding-right: 30px;
  }

  .fCardBody {
    width: calc(100% - 20px);
    margin: 10px;
   /* background: #ddd; */
    min-height: calc(8vh - 20px);
  }

  .fCardFooter {
    background: #2c395e;
    height: 6vh;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fCardBodyText {
    padding: 30px;
    text-align: left;
    color: #2c395e;
    font-size: 14px;
  }



  /*  Keyframes  */
@-webkit-keyframes boxShadow {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(100px);
            transform: translateZ(100px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
  }
}
@keyframes boxShadow {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(100px);
            transform: translateZ(100px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
  }
}

/* mobiles */

@media screen and (max-width: 420px ) {
  .lSideBar{
    display: none;
  }
  .rSidebarP{
    display:none;
  }
  .rSidebarS{
    display:none;
  }
  .main{
    width:95vw;
    left: 4vw;
    
  }
  .fCard {
    width: 90%;
    margin-left: 5%;
  }
    
}

@media screen and (max-width: 620px ) {
  .lSideBar{
    display: none;
  }
  .rSidebarP{
    display:none;
  }
  .rSidebarS{
    display:none;
  }
  .main{
    width:100vw;
    left: 1vw;
  }
  .userPostImg{
    padding-left: 0vw;             
  }
  .fCardFooter{
    height:11vh;

  }
   
}

@media screen and (max-width: 768px ) {
  
}

@media screen and (max-width: 992px ) {
  
}

@media screen and (max-width: 1100px ) {
  
}

</style>
