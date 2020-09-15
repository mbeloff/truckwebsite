<template>
  <div id="app">
    <Nav id="nav"></Nav>

    <modal
      name="modal"
      height="auto"
      :scrollable="true"
      :adaptive="true"
      :clickToClose="false"
      :focusTrap="true"
    >
      <standard-form></standard-form>
    </modal>
    <div class="content">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import StandardForm from "@/components/StandardForm.vue";

export default {
  components: { Nav, Footer, StandardForm },
  methods: {
    show() {
      this.$modal.show("modal");
    },
    hide() {
      this.$modal.hide("modal");
    }
  },
  mount() {
    this.show();
  }
};
</script>

<style lang="scss">
body {
  margin: 0 0 0 0;
  --primary: #ff3c00;
  --secondary: #00c4a3;
  --dark-color: #6d2c31;
  --light-color: #ff9939;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@531&display=swap");

.vm--modal {
  height: auto !important;
}

#app {
  min-height: 100vh;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-variation-settings: "wght" 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 1fr auto;
}

#nav {
  height: 100px;
}

.content {
  // padding-top: 100px;
}
</style>
