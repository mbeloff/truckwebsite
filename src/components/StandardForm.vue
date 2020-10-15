<template>
  <div class="form bg-light col-12 pt-1 pb-3">
    <form
      name="TruckQuote"
      method="post"
      id="TruckQuote"
      action="/success"
      data-netlify="true"
      @submit.prevent="handleSubmit"
    >
      <p class="sub-title">
        <a
          class="btn-close far fa-times fa-2x float-right p-2 ml-3"
          @click="hide()"
        ></a>
        <span
          >Please leave your details and and we'll get back to you with a
          quote.</span
        >
      </p>

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
            v-model="form.name"
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
            v-model="form.number"
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
            v-model="form.email"
          /><i class="form-icon fal fa-envelope"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 form-group">
          <label class="sr-only">Pickup Location</label>

          <select
            class="form-control"
            name="location"
            required
            aria-label="Pickup Location"
            value=""
            v-model="form.location"
          >
            <option value="" disabled="disabled" selected="selected"
              >Pickup Location</option
            >
            <option value="Brisbane">Brisbane</option> </select
          ><i class="form-icon fal fa-map-marker-alt"></i>
        </div>
        <div class="col-md-6 form-group position-relative">
          <div class="form-control my-0 py-0">
            <v-date-picker
              mode="range"
              class="date-picker"
              :popover="{ placement: 'bottom' }"
              :min-date="new Date()"
              v-model="form.dateRange"
              @input="formatDate"
              required
              readonly="true"
              color="blue"
              :masks="{ L: 'MMM DD' }"
              :input-props="{
                class: 'form-control custom-input bg-white px-0',
                placeholder: 'Pickup/Dropoff Dates',
                readonly: true
              }"
            >
            </v-date-picker>
            <i class="form-icon fal fa-calendar-alt"></i>
          </div>
          <!-- <label for="" class="underlabel position-absolute"
            >Pickup/Dropoff Dates</label
          > -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="check-grid my-2">
            <input
              class="mr-2 ml-2 my-auto"
              type="checkbox"
              name="ageCheck"
              id="ageCheck"
              required
              v-model="form.ageCheck"
            />
            <label for="ageCheck" class="my-auto"
              >I am over 21 years old and hold a valid open drivers
              licence</label
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 form-group position-relative">
          <label class="sr-only">Drivers Licence Number</label>
          <input
            class="form-control"
            type="text"
            placeholder="Licence #"
            aria-label="Your phone number"
            name="DriversLicenceNumber"
            required
            v-model="form.DriversLicenceNumber"
            autocomplete="off"
          /><i class="form-icon fal fa-hashtag"></i>
        </div>

        <div class="col-md-4 form-group position-relative">
          <div class="form-control my-0 py-0">
            <v-date-picker
              id="LicenceExpiry"
              class="date-picker"
              name="LicenceExpiry"
              :popover="{ placement: 'bottom' }"
              :min-date="new Date()"
              :max-date="new Date(new Date().getFullYear() + 10, 1, 1)"
              v-model="form.LicenceExpiry"
              @input="formatExp"
              required
              readonly="true"
              color="blue"
              :masks="{ L: 'DD/MM/YY' }"
              :input-props="{
                class: 'form-control custom-input bg-white px-0',
                placeholder: 'Licence Expiry',
                readonly: true
              }"
            >
            </v-date-picker>
            <i class="form-icon fal fa-calendar"></i>
          </div>
          <!-- <label class="position-absolute underlabel" for="DLexp"
            >Drivers Licence Expiry Date</label
          > -->
        </div>
        <div class="col-md-4 form-group">
          <select
            class="form-control"
            name="DriversLicenceState"
            required
            aria-invalid="false"
            aria-label="Drivers Licence State"
            v-model="form.DriversLicenceState"
          >
            <option value="" disabled="disabled" selected="selected"
              >Licence State</option
            >
            <option value="ACT">ACT</option>
            <option value="NSW">NSW</option>
            <option value="NT">NT</option>
            <option value="QLD">QLD</option>
            <option value="SA">SA</option>
            <option value="VIC">VIC</option>
            <option value="TAS">TAS</option>
            <option value="WA">WA</option> </select
          ><i class="form-icon fal fa-map-marker-alt"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 form-group g-mb-40">
          <label class="sr-only">Enter additional comments here</label>

          <textarea
            class="form-control"
            rows="4"
            placeholder="Please enter any additional information or requests here ..."
            aria-label="Type your enquiry here"
            name="comment"
            v-model="form.comment"
          ></textarea
          ><i class="form-icon fal fa-comment-alt-lines"></i>
        </div>
      </div>
      <div class="row mt-2">
        <p class="col-12 secondary mb-1" for="featuresChecklist">
          Moving Equipment
        </p>
        <div class="col-12 col-md-6 form-group check-group mb-0">
          <input
            class="mr-2 ml-2"
            type="checkbox"
            id="trolley"
            value="Trolley"
            v-model="form.requestedFeatures"
          />
          <label for="trolley">Trolley ($25/ea)</label>
        </div>
        <div class="col-12 col-md-6 form-group check-group">
          <input
            class="mr-2 ml-2"
            type="checkbox"
            id="blankets"
            value="Blankets"
            v-model="form.requestedFeatures"
          />
          <label for="blankets">Blankets ($5/ea)</label>
        </div>
      </div>
      <div class="row">
        <p class="secondary col-12 mb-1">
          Do you need someone to drive, or assist with moving? We can help
        </p>
        <div class="col-12 col-md-6 form-group check-group mb-0">
          <input
            class="mr-2 ml-2"
            type="checkbox"
            id="driver"
            value="Driver Requested"
            v-model="form.removalistRequest"
          />
          <label for="driver">Yes, I need a Driver</label>
        </div>
        <div class="col-12 col-md-6 form-group check-group">
          <input
            class="mr-2 ml-2"
            type="checkbox"
            id="mover"
            value="Movers Requested"
            v-model="form.removalistRequest"
          />
          <label for="mover">Yes, I need movers</label>
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
</template>

<script>
export default {
  data() {
    return {
      form: this.$store.state.form
    }
  },
  methods: {
    formatDate() {
      this.form.dateRangeShort =
        this.form.dateRange.start.toString().substring(0, 10) +
        ' to ' +
        this.form.dateRange.end.toString().substring(0, 10)
    },
    formatExp() {
      this.form.LicenceExpiryShort =
        this.form.LicenceExpiry.getDate() +
        '/' +
        this.form.LicenceExpiry.getMonth() +
        '/' +
        this.form.LicenceExpiry.getFullYear()
    },
    hide() {
      this.$store.commit('storeForm', this.form)
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
          'form-name': 'TruckQuote',
          ...this.form
        })
      })
        .then(() => {
          this.$router.push('success')
          // console.log('success')
          this.$modal.hide('modal')
        })
        .catch(() => {
          this.$router.push('404')
          // console.log('failure')
          this.$modal.hide('modal')
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

<style lang="scss">
.form {
  --secondary: rgb(255, 115, 0);
  --primary: rgb(51, 77, 163);
}

.check-grid {
  display: grid;
  grid-template-columns: 2rem 1fr;
}

.check-group label {
  margin-bottom: 0;
}

.form {
  .sub-title {
    font-size: 1.25rem;
    color: unset;
  }
  p,
  label {
    font-family: Arial, sans-serif;
  }
  label {
    color: rgb(68, 67, 67);
  }
}

.form-control {
  background: rgb(255, 255, 255);
  padding-left: 2.4rem !important;
  span {
    width: 100%;
    // padding-right: 4.5rem;
  }
}

input.custom-input {
  border-radius: 0;
  border-left: none;
  border-right: none;
  width: calc(100% - 4.5rem);
  padding-left: 0 !important;
}

input.vc-w-full {
  width: calc(100% - 4.5rem);
  padding-left: 0;
}

input.vc-border {
  border-radius: 0;
  border-left: none;
  border-right: none;
}

.form-control::placeholder {
  font-weight: 400;
}

select.form-control {
  padding-left: 2.1rem !important;
}

.form-icon {
  position: absolute;
  left: 1.5rem;
  top: 0.7rem;
  color: var(--primary);
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.74, 2.66);
}

.form-control:focus + .form-icon,
.form-control:hover + .form-icon {
  transform: scale(1.3);
  color: var(--secondary);
}

.date-picker {
  position: absolute;
  top: 0px;
  border-width: 0 !important;
  border-color: white !important;
}

.date-picker:hover + .form-icon {
  transform: scale(1.3);
  color: var(--secondary);
}

textarea::placeholder,
input::placeholder,
select::placeholder {
  color: #808a94;
  font-weight: 100;
}

.btn-close {
  color: var(--primary);
  &:hover {
    color: var(--secondary);
  }
}

.form {
  .btn-submit {
    color: var(--primary);
    border: var(--primary) 1px solid;
    border-radius: 20px;
    // font-weight: 100;
    &:hover,
    &:focus {
      background: var(--primary);
      color: white !important;
      // transform: scale(1.02);
      transition: transform 0.1s cubic-bezier(0.5, -0.24, 0.5, 3.21);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  height: 100px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
</style>
