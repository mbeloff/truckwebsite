<template>
  <div class="container h-100 d-flex flex-center">
    <div class="d-flex flex-column my-auto">
      <h1 class="mb-3">message received :)</h1>
      <h3 class="underline mb-5 font-weight-thin">
        thanks for reaching out. we'll get back to you <br />
        as soon as we can.
      </h3>
      <router-link
        class="my-2 ml-4 font-weight-thin"
        style="font-size: 1.5rem"
        to="/"
        ><i class="fal fa-backward align-middle mr-2"></i>go back</router-link
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
a {
  color: var(--teal);
}
</style>
