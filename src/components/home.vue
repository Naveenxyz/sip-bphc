<template>
  <div class="body">
    <div class="top-nav elevation-1">
      <i class='bx menu-toggle' :class="{ 'bx-x': sidebarStatus, 'bx-menu-alt-left': !sidebarStatus }" @click.prevent="toggleSidebar"></i>
    </div>
    <div class="sidebar elevation-10" ref="sidebar">

    </div>
    <div class="side-menu elevation-3">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sidebarStatus: true,
    }
  },
  methods : {
    toggleSidebar () {
      this.sidebarStatus = !this.sidebarStatus
      if ( this.sidebarStatus ) {
        this.$refs.sidebar.style.width = '20vw'
      } else if ( !this.sidebarStatus ) {
        this.$refs.sidebar.style.width = '0px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-nav {
    position: fixed;
    background:#E5416D;
    top: 0px;
    left: 0px;
    height: 8%;
    width: 100%;
    z-index: 9;
  }

  .menu-toggle {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 2vw;
    font-size: 2.2rem;
    cursor: pointer;
    color: white;
    transition: 100ms linear;
  }

  .menu-toggle:hover {
    color: #efefef;
  }

  .sidebar {
    position: absolute;
    background: #444;
    top: 0%;
    left: 0px;
    width: 20vw;
    height: 100%;
    z-index: 8;
    transition: 250ms linear;
  }

  .side-menu {
    position: absolute;
    background: #444;
    top: 0%;
    right: 0px;
    width: 20%;
    height: 100%;
    z-index: 2;
    transition: 250ms linear;
  }
</style>
