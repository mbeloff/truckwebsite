<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 form">
        <form
          name="GeneralEnquiry"
          method="post"
          id="GeneralEnquiry"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        >
          <p class="title">Got a question?</p>
          <p class="sub-title">
            Please use this form to make a general enquiry.
          </p>
          <p>
            If you'd like to get a quote instead -
            <a href="javascript:void(0)" @click="show()">click here</a>
          </p>
          <br />
          <input type="hidden" name="form-name" value="GeneralEnquiry" />
          <div class="row">
            <div class="col-md-12 form-group">
              <label class="sr-only">Name</label>

              <input
                class="form-control"
                type="text"
                aria-label="Your name"
                placeholder="Name"
                name="name"
                required
                ref="name"
              />
              <i class="form-icon fal fa-user"></i>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-group">
              <label class="sr-only">Phone</label>

              <input
                class="form-control"
                type="tel"
                placeholder="Phone"
                aria-label="Your phone number"
                name="number"
                required
              /><i class="form-icon fal fa-phone-rotary"></i>
            </div>

            <div class="col-md-6 form-group">
              <label class="sr-only">Email</label>

              <input
                class="form-control"
                type="email"
                placeholder="Email"
                aria-label="Your email address"
                name="email"
              /><i class="form-icon fal fa-envelope"></i>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group g-mb-40">
              <label class="sr-only">Enter additional comments here</label>

              <textarea
                class="form-control"
                rows="4"
                placeholder="Hi. I would like to know..."
                aria-label="Type your enquiry here"
                name="comment"
              ></textarea
              ><i class="form-icon fal fa-comment-alt-lines"></i>
            </div>
          </div>
          <div class="text-right mt-4">
            <button
              type="submit"
              class="btn btn-submit text-uppercase"
              aria-label="Submit"
            >
              <p class="mb-0">
                <i class="fa fa-paper-plane mr-1 d-inline"></i> Submit
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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

<style></style>
