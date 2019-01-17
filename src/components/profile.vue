<template>
    <div class="top">
        <navBar />
        <div class="bar"></div>
        <div class="sub-bar">
            <div style="flex: 2"></div>
            <span style="flex: 1" class="bar-text"> <i class="bx bx-body navIcon" alt="profile" ></i><br><p>Posts</p> </span>
            <span style="flex: 1" class="bar-text"><i class="bx bx-bot navIcon" style="flex: 1"></i><br><p>Following</p> </span>
            <span style="flex: 1" class="bar-text"><i class="bx bx-code navIcon" style="flex: 1"></i><br><p>Contributions</p> </span>
            <span style="flex: 1" class="bar-text"><i class="bx bx-show navIcon" style="flex: 1"></i><br><p>Showcase</p> </span>
            <div style="flex: 2"></div>
        </div>
        <div class="profile-photo"><img src="./photo.png" alt="photo" class="pp"></div>    
    </div>
</template>

<script>
import navBar from './navBar';
export default {
    name: 'profile',
    components: {
        navBar
    }
}
</script>
<style scoped>
.bar-text{
    color: orange;
    transform: translateY(1.5vw);
    text-align: center;

}
.bar{
    position: relative;
    width: 100vw;
    height: 15vw;
    background-color: orange;
    z-index: 0;
}
.pp{
    position: relative;
    height: 17vw;
    width: 17vw;
    border-radius: 50%;
    margin-left: 5vw;
    transform: translateY(-13vw);
    z-index : 2 ;
    border: 0.3vw solid white;
}
.navIcon {
    color: #EEEFF7;
    font-size: 1.5rem;
    cursor: pointer;
    align-content: center;
  }
.sub-bar{
    display: flex;
    position: relative;
    width: 100vw;
    height: 5vw;
    background-color: #2c395e;
    z-index: 1;
}

</style>
