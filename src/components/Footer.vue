<template>
  <div class="pt-4 text-center text-white" id="footer">
    <a
      href="javascript:void(0)"
      class="btn btn-grad font-weight-bold btn-lg"
      @click="show()"
      >Get a Quote</a
    >
    <a
      href="tel:1800246869"
      class="d-block h1 footer-number font-weight-bold mt-2 text-decoration-none"
      >1800 24 68 69</a
    >
    <p class="text-center">
      &copy; wickedtruckrentals.com -
      <router-link to="privacy" class="privacy">Privacy Policy</router-link>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$store.commit('storeRemovalist', [])
      this.$modal.show('modal')
    },
    hide() {
      this.$modal.hide('modal')
    }
  }
}
</script>

<style scoped lang="scss">
#footer {
  background: var(--bg-dark);
}

.footer-number {
  font-family: Helvetica;
  color: white;
  &:hover {
    color: var(--primary);
  }
}

.privacy {
  color: rgb(180, 185, 207);
}
</style>
