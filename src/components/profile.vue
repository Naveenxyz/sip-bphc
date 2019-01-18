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
        <div class="profile-photo"><img src="./im.jpg" alt="photo" class="pp"></div>
        <div class="bottom-part">
            <div style="flex:1"></div>
            <div class="details" style="flex: 3"><!--
                <h2>Naveen Kumar Battula</h2>@naveenkb1999<br>BITS Pilani Hyderabad Campus<br>
                Electronics and Communication Engineering <br>
                Born June 15 1999 -->
                <h2>Naveen kumar Battula</h2><br>
                <i class="bx bx-id-card boxes"></i> @naveenkb1999<br>
                <i class="bx bx-contact boxes"></i>naveenkb1999@gmail.com<br>
                <i class="bx bx-calendar boxes"></i> June 15 1999<br>
                Electronis and Communication Engineering<br>
                BITS Pilani Hyderabad Campus
                
            </div>
            <div class="changable" style="flex: 8;">
                <div><img src="./im.jpg" alt="photo" style="position: relative;height: 3vw;width: 3vw;border-radius: 50%;transform: translate(1.5vw,1.5vw);"></div>
                <div style="transform: translate(2vw,2vw);font-size:20px">Naveen Kumar Battula  <small>@naveenkb1999</small></div><br>
                <div class="qanda">This is where the Posts are written<br>
                <br>
                <br>
                <br>
                <br>
                <br></div>
            </div>
            <div class="showcase" style="flex: 3;transform: translateX(3vw);"><h2>Projects and Internships</h2></div>
            <div style="flex:1"></div>
        </div>  
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
    font-size: 1vw;

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
    font-size: 1.8vw;
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
.details{
    transform: translate(-1vw,4vw);
    height: 20vw;
}
.qanda{
    transform: translate(-20vw,6vw);
    height:12vw;
    padding: 10px;
    border-radius: 10px;
}
.bottom-part{
    display: flex;
    transform: translateY(-15vw);
    text-align: left;
    align-content: center;
    padding: 3px;
    line-height: 25px;
    
}
.changable{
    background-color: white;
    display:flex;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
