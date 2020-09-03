<template>
  <div id="app">
    <Nav id="nav"></Nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import Nav from "@/components/Nav.vue";
export default {
  components: { Nav }
};
</script>

<style lang="scss">
body {
  margin: 0 0 0 0;
  --primary: #ff3c00;
  --secondary: #1a81ff;
  --dark-color: #6d2c31;
  --light-color: #ff9939;
}
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  grid-template-rows: 1fr auto;
}

#nav {
  position: absolute;
  width: 100%;
  height: 100px;
}

.content {
  padding-top: 100px;
}
</style>
