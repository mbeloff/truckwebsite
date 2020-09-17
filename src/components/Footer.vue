<template>
  <div class="py-4 text-center text-white" id="footer">
    <a
      href="javascript:void(0)"
      class="btn btn-grad font-weight-bold btn-lg"
      @click="show()"
      >Get a Quote</a
    >
    <h1 class="footer-number font-weight-bold mt-2">1800 24 68 69</h1>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
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
}
</style>
