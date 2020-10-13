<template>
  <div>
    <div class="home">
      <div class="container my-auto h-100 py-5 position-relative">
        <div class="my-auto ">
          <h1
            class="big-title font-weight-bold text-left d-inline-block font-italic"
          >
            Best <span>Truckin'</span> Deals in Brisbane
          </h1>
        </div>
        <div class="rounded-circle position-absolute starburst">
          <img class="img-fluid" src="../assets/3hour.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 intro-text">
          <h2 class="title">
            Moving? Need a Truck?
          </h2>
          <h5 class="sub-title">
            Looking for the best rates on truck rental?
          </h5>
          <p>
            Want 250km per day included?<br />
            Want damage waiver included?<br />
            Want a 500kg tray lift included?<br />
            What are you waiting for?
          </p>
          <a
            href="javascript:void(0)"
            class="btn btn-grad font-weight-bold"
            @click="show()"
            >Get a Quote</a
          >
        </div>
        <div class="col-12 col-md-6 mb-5 my-md-auto">
          <img
            class="img-fluid"
            src="../assets/cheap-truck-hire-brisbane.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="container-fluid card-bg mt-5">
      <div class="container">
        <div class="card-wrapper py-5">
          <div class="card position-relative">
            <div
              class="img-wrapper m-auto position-relative"
              style="width: 100%; height: 100px; max-width: 200px;"
            >
              <div
                class="rounded-circle circle-shadow m-auto position-absolute driver-img"
                style="left: 0; bottom: 0; height: 200px; width: 200px;"
              ></div>
            </div>
            <div class="card-body">
              <div>
                <h3 class="py-3 text-left text-md-center">Truck & Driver</h3>
                <p class="text-left">
                  Load the truck yourself but leave the driving to us. We'll get
                  your things where they need to go.
                </p>
              </div>
              <a
                href="javascript:void(0)"
                class="btn btn-grad btn-card position-absolute font-weight-bold"
                @click="showDriver()"
                >Get a Quote</a
              >
            </div>
          </div>
          <div class="card card-special position-relative">
            <div
              class="img-wrapper m-auto position-relative"
              style="width: 100%; height: 100px; max-width: 200px;"
            >
              <div
                class="rounded-circle bg-white circle-shadow m-auto position-absolute diy-img"
                src="../assets/drawkit/VAN.svg"
                alt=""
                style="left: 0; bottom: 0; height: 200px; width: 200px;"
              ></div>
            </div>
            <div class="card-body">
              <div>
                <h3 class="py-3 text-left text-md-center">Truck Rental</h3>
                <p class="text-left">
                  Easy DIY moving. Get the best rates on easy to drive moving
                  trucks.
                </p>
              </div>
              <a
                href="javascript:void(0)"
                class="btn btn-grad btn-card position-absolute font-weight-bold"
                @click="show()"
                >Get a Quote</a
              >
            </div>
          </div>
          <div class="card position-relative">
            <div
              class="img-wrapper m-auto position-relative"
              style="width: 100%; height: 100px; max-width: 200px;"
            >
              <div
                class="rounded-circle bg-white circle-shadow m-auto position-absolute move-img"
                style="left: 0; bottom: 0; height: 200px; width: 200px;"
              ></div>
            </div>
            <div class="card-body">
              <div>
                <h3 class="py-3 text-left text-md-center">Truck & Movers</h3>
                <p class="text-left">
                  Sit back and relax while we take care of all the driving and
                  heavy lifting.
                </p>
              </div>
              <a
                href="javascript:void(0)"
                class="btn btn-grad btn-card position-absolute font-weight-bold"
                @click="showMover()"
                >Get a Quote</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container map-section py-5">
      <h2 class="title text-left">
        Our Location
      </h2>
      <div class="map-wrapper mt-5">
        <div class="">
          <h2 class="font-weight-bold text-left">Brisbane</h2>
          <h6 class="text-left mb-3">
            100 Longlands St, Woolloongabba
          </h6>
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
        <!-- <div class="">
          <h2 class="font-weight-bold text-left">Sydney</h2>
          <h6 class="text-left mb-3">
            15 Margate St, Botany
          </h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.608049934612!2d151.1985810157059!3d-33.95120773077296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b13ce476f9b3%3A0x2ca4004bbe19470f!2s15%20Margate%20St%2C%20Botany%20NSW%202019!5e0!3m2!1sen!2sau!4v1599104634116!5m2!1sen!2sau"
            width="100%"
            height="300"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            class="border"
          ></iframe>
        </div> -->
      </div>
    </div>
    <div class="py-5">
      <div class="container text-left">
        <div class="row">
          <div class="py-3 col-12 col-md-6">
            <h2 class="title">
              Our Trucks<a
                href="javascript:void(0)"
                @click="show()"
                class="btn btn-grad ml-3 mb-2"
                >Get a Quote</a
              >
            </h2>
            <h4 class="sub-title">
              Auto, 500kg Tailgate Lift, Open Car Licence OK
            </h4>
            <p>
              All Wicked Trucks are easy to drive make moving as easy as
              possible. Economical, safe and able to be driven with just a
              regular car licence. Rear tailgate lifter makes loading those
              large, heavy items a breeze.
            </p>
            <ul class="list-unstyled checklist">
              <li class="list-item">
                <i class="fas fa-check-circle mr-2"></i
                ><span><strong>Drive on an Open Car Licence</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span><strong>Automatic</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span
                  ><strong
                    >20m³ Capacity (4.2m long x 2.1m wide x 2.1m high)</strong
                  ></span
                >
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span
                  ><strong>Fits an average 3 Bedroom Unit<br /></strong
                ></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span><strong>Late Model Trucks</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span><strong>500kg Rear Tailgate Lifter</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span><strong>Seats 3 Adults</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span><strong>Economical Diesel Engines</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span><strong>Air Con / CD / MP3 Player</strong></span>
              </li>
              <li>
                <i class="fas fa-check-circle mr-2"></i
                ><span
                  ><strong>Trolley and Moving Blankets Available</strong></span
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <img
              src="../assets/cheap-truck-rental-brisbane.jpg"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <Faq
            id="faq"
            :content="'set1'"
            :faqhead="'Frequently Asked Questions'"
          ></Faq>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Faq from '@/components/Faq.vue'
export default {
  components: { Faq },
  name: 'Home',
  methods: {
    show() {
      this.$store.commit('storeRemovalist', [])
      this.$modal.show('modal')
    },
    showDriver() {
      this.$store.commit('storeRemovalist', ['Driver Requested'])
      this.$modal.show('modal')
    },
    showMover() {
      this.$store.commit('storeRemovalist', ['Movers Requested'])
      this.$modal.show('modal')
    },
    hide() {
      this.$store.commit('storeRemovalist', [])
      this.$modal.hide('modal')
    }
  }
}
</script>
<style lang="scss">
.home {
  min-height: 300px;
  max-height: 100vh;
  background: var(--bg-dark);
  .container {
    height: 100% !important;
    min-height: 300px;
  }
}

.starburst {
  right: 1rem;
  bottom: -3rem;
  width: 250px;
  @media only screen and (max-width: 380px) {
    width: 200px;
    bottom: -4rem;
  }
}

.big-title {
  color: rgb(245, 240, 236);
  font-size: calc(40px + (80 - 40) * ((100vw - 300px) / (1600 - 300)));
  font-variation-settings: 'wght' 700;
  span {
    color: var(--primary);
    // background: white;
    // padding: 0 1.5rem;
    // clip-path: polygon(2rem 0%, 100% 0%, calc(100% - 2rem) 100%, 0% 100%);
  }
}

.intro-text {
  text-align: left;
  margin: 5rem auto;
  @media only screen and (min-width: 768px) {
    margin: 10rem auto;
  }
}

.btn-card {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.card-wrapper {
  margin: auto;
  // max-width: 1000px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 10rem;
  @media only screen and (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
}

.card {
  background-color: rgb(253, 245, 234) !important;
  h3 {
    font-weight: 600;
  }
}

.card-bg {
  background: var(--bg-dark);
}

.circle-shadow {
  box-shadow: 0px 6px 10px rgba(212, 95, 0, 0.151);
}

.map-wrapper {
  margin: auto;
  max-width: 1200px;
  display: grid;
  // grid-template-rows: 1fr 1fr;
  // grid-template-columns: 1fr;
  grid-gap: 5rem;
  @media only screen and (min-width: 768px) {
    grid-template-rows: 1fr;
    // grid-template-columns: 1fr 1fr;
    // grid-gap: 10rem;
  }
}

.diy-img {
  background-image: url('../assets/diy.jpg');
  background-size: cover;
}
.move-img {
  background-image: url('../assets/mover.png');
  background-size: cover;
}
.driver-img {
  background-image: url('../assets/driver.jpg');
  background-size: cover;
}

.checklist i {
  color: var(--primary);
}
</style>
