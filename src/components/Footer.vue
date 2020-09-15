<template>
  <div class="mt-5 py-4 text-center text-white" id="footer">
    <a
      href="javascript:void(0)"
      class="btn btn-grad font-weight-bold"
      @click="show()"
      >Get a Quote</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("modal");
    },
    hide() {
      this.$modal.hide("modal");
    }
  }
};
</script>

<style scoped lang="scss">
#footer {
  background: rgb(38, 39, 44);
}

.brand {
  color: rgb(148, 134, 137);
  font-variation-settings: "wght" 350;
}
</style>
