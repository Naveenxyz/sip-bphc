<template>
    <div class="top">
        <div class="bar"></div>
        <div class="sub-bar"></div>
        <div class="profile-photo"><img src="./photo.png" alt="photo" class="pp"></div>    
    </div>
</template>

<script>
export default {
    name: 'profile'
}
</script>


<style scoped>

.bar{
    position: relative;
    width: 100vw;
    height: 15vw;
    background-color: blue;
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
.sub-bar{
    position: relative;
    width: 100vw;
    height: 5vw;
    background-color:black;
    z-index: 1;
}

</style>
