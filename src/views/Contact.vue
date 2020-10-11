<template>
  <div class="h-100 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 form">
          <form
            name="TruckEnquiry"
            method="post"
            id="TruckEnquiry"
            action="/success"
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
            <input
              type="text"
              class="invisible py-0"
              name="bot-field"
              style="height: 0"
            />
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
                  v-model="enquire.name"
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
                  v-model="enquire.number"
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
                  v-model="enquire.email"
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
                  name="question"
                  required
                  v-model="enquire.question"
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

    <div class="row bg-light mt-5 py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 ">
            <h2 class="sub-title">Contact Info</h2>
            <p>
              <b>Address:</b><br />100 Longlands St, Woolloongabba <br />4102
              QLD
            </p>

            <p>
              <b>Opening Hours:</b> <br />mon-fri: 9-4 <br />
              sat: 9-12 <br />
              sun: closed
            </p>

            <p>
              <b>Ph:</b> 1800 24 68 69 <br />
              <b>email:</b> info@wickedtruckrentals.com
            </p>
          </div>
           <div class="col-12 col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.286743752041!2d153.04186376505737!3d-27.491456432881755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a40d28d9ccb%3A0x2f93bd23fe7dd95a!2s100%20Longlands%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1602457761507!5m2!1sen!2sau"
            width="100%"
            height="300"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            class="border"
          ></iframe>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enquire: {
        name: '',
        number: '',
        email: '',
        question: ''
      }
    }
  },
  methods: {
    show() {
      this.$modal.show('modal')
    },
    hide() {
      this.$modal.hide('modal')
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'TruckEnquiry',
          ...this.enquire
        })
      })
        .then(() => {
          this.$router.push('success')
          // console.log('success')
        })
        .catch(() => {
          this.$router.push('404')
          // console.log('failure')
        })
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.name.focus()
    }, 500)
  }
}
</script>

<style></style>
