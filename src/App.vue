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
import 'vue-navigation-bar/dist/vue-navigation-bar.css'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import StandardForm from '@/components/StandardForm.vue'

export default {
  components: { Nav, Footer, StandardForm },
  methods: {
    show() {
      this.$store.commit('storeRemovalist', [])
      this.$modal.show('modal')
    },
    hide() {
      this.$modal.hide('modal')
    }
  },
  mount() {
    this.show()
  }
}
</script>

<style lang="scss">
body {
  margin: 0 0 0 0;
  --primary: #ff3c00;
  --secondary: #00c4a3;
  --dark-color: #6d2c31;
  --light-color: #ff9939;
  --bg-dark: hsl(216, 30%, 24%);
  scroll-behavior: smooth;
}

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@531&display=swap');

.vm--modal {
  height: auto !important;
}

#app {
  min-height: 100vh;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-variation-settings: 'wght' 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

#nav {
  height: 100px;
}

.title {
  color: var(--dark-color);
  font-weight: 600;
  font-variation-settings: 'wght' 700;
  font-size: 2.5rem;
  font-size: calc(30px + (40 - 30) * ((100vw - 300px) / (1200 - 300)));
}

.sub-title {
  color: var(--primary);
  font-weight: 600;
  font-variation-settings: 'wght' 550;
  font-size: calc(20px + (25 - 20) * ((100vw - 300px) / (1600 - 300)));
}

.btn-grad {
  color: white !important;
  background-image: linear-gradient(
    15deg,
    var(--primary) 40%,
    var(--light-color)
  );
  background-size: 300%;
  background-position: 50%;
  border: none !important;
  transition: background-position 0.15s ease-in-out;
  &:hover {
    background-position: 100%;
    color: white;
    border: none !important;
  }
}
</style>
