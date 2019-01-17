<template>
    <div class="top-nav elevation-1">
      <p class="logo" style="flex: 2;color: white;font-family: Montserrat;align-content: center;font-size: 1.6rem;text-align: center;margin-top: 15px;font-weight: 500;word-spacing: 10px;letter-spacing: 1px;"> Social Net </p>
      <div class="searchBar" style="flex: 4;">
        <input type="text" name="search" class="navSerachInput" placeholder="Search About A Post or a Person" v-model="navSearch">
        <button class="navSearchBtn"><i class="bx bx-search-alt navSearchIcon" style="font-size: 1.5rem;"></i></button>
      </div>
      <div style="flex: 3"></div>
      <i class="bx bx-user-circle navIcon" slot="activator" style="flex: 1"></i>
      <i class="bx bx-message-detail navIcon" style="flex: 1"></i>
      <i class="bx bx-code navIcon" style="flex: 1"></i>
      <i class="bx bx-horizontal-center navIcon" style="flex: 1"></i>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
        navSearch: ''
    }
  },
  methods : {
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

</style>
