<template>
  <div>
    <div class="home d-flex flex-column flex-center py-5">
      <div class="container my-auto">
        <h1
          class="big-title font-weight-bold text-left d-inline-block font-italic"
        >
          Best <span>Truckin'</span> Deals in Brisbane
        </h1>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae, magnam? Accusamus iusto nostrum minus, modi reiciendis
            consequatur veniam veritatis voluptatibus vel esse quidem a eligendi
            quas. Alias eius amet incidunt beatae quam ratione illum
            praesentium!
          </p>
        </div>
        <div class="col-12 col-md-6 mb-5 my-md-auto">
          <img class="img-fluid" src="../assets/truck.jpg" alt="" />
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
              <img
                class="rounded-circle bg-white circle-shadow m-auto position-absolute"
                src="../assets/drawkit/DRIVER.svg"
                alt=""
                style="left: 0; bottom: 0; height: 200px; width: 200px;"
              />
            </div>
            <div class="card-body">
              <div>
                <h3 class="py-3 text-left text-md-center">Truck & Driver</h3>
                <p class="text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam debitis consectetur vel labore atque consequuntur.
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
          <div class="card card-special position-relative">
            <div
              class="img-wrapper m-auto position-relative"
              style="width: 100%; height: 100px; max-width: 200px;"
            >
              <img
                class="rounded-circle bg-white circle-shadow m-auto position-absolute"
                src="../assets/drawkit/VAN.svg"
                alt=""
                style="left: 0; bottom: 0; height: 200px; width: 200px;"
              />
            </div>
            <div class="card-body">
              <div>
                <h3 class="py-3 text-left text-md-center">Truck Rental</h3>
                <p class="text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam debitis consectetur vel labore atque consequuntur.
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
              <img
                class="rounded-circle bg-white circle-shadow m-auto position-absolute"
                src="../assets/drawkit/MOVERS.svg"
                alt=""
                style="left: 0; bottom: 0; height: 200px; width: 200px;"
              />
            </div>
            <div class="card-body">
              <div>
                <h3 class="py-3 text-left text-md-center">Truck & Mover</h3>
                <p class="text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam debitis consectetur vel labore atque consequuntur.
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
            46 Deshon St, Woolloongabba
          </h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.6296790383419!2d153.04380082481438!3d-27.49182236292564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a40d59fd803%3A0xbb2b9652a52d897c!2s46%20Deshon%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1599104574558!5m2!1sen!2sau"
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem earum, magni animi, sed recusandae sit mollitia,
              libero voluptatem qui eligendi fuga officia rerum! Quibusdam nam
              numquam quae totam atque nisi?
            </p>
          </div>
          <div class="col-12 col-md-6">
            <img src="../assets/truck.jpg" alt="" class="img-fluid" />
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
import Faq from "@/components/Faq.vue";
export default {
  components: { Faq },
  name: "Home",
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
<style lang="scss">
.home {
  min-height: 300px;
  max-height: 100vh;
  // background-image: linear-gradient(30deg, #fcb141, rgb(255, 45, 17));
  background: var(--bg-dark);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
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
</style>
