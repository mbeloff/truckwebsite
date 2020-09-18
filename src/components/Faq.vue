<template>
  <div class="col-12 pt-5 px-0 px-md-3">
    <h2 class="title ml-3 ml-sm-0">
      {{ faqhead }}
    </h2>
    <dl class="accordion box" role="presentation">
      <Faqitem
        v-for="item in getQuestions"
        :multiple="multiple"
        :item="item"
        :groupId="groupId"
        :key="item.id"
      >
      </Faqitem>
    </dl>
  </div>
</template>

<script>
import Faqitem from '@/components/Faqitem.vue'
export default {
  components: {
    Faqitem
  },
  props: {
    content: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    faqhead: {
      type: String
    }
  },
  methods: {
    changeContent(set) {
      this.selectedCategory = set
    }
  },
  data() {
    return {
      groupId: null,
      selectedCategory: this.content,
      set1: [
        {
          id: 1,
          active: true,
          title: 'What sort of licence will I need?',
          details: `
        <p>If you are 25 years or older and have an open car licence you are good to go.</p>
      `
        },
        {
          id: 2,
          active: false,
          title:
            'I’m a truck rookie, this is my first time. What do I need to know?',
          details: `
          <p>Our trucks are really easy to drive, but here are some tips </p>
        <ul>
<li class="list-item">Trucks are big heavy boxes, brake sooner than a car to give yourself time to stop.</li>
<li class="list-item">Don’t tailgate, trucks take longer to slow down than you may be used to.</li>
<li class="list-item">Watch the corners, no tight turns in trucks. Always best to have someone guide you in reverse.</li>
<li class="list-item">Don’t speed, trucks aren’t designed for speeding and handling can be impacted</li>
<li class="list-item">Set your reverse side mirrors before you drive off. Everyone is different.</li>
<li class="list-item">Watch your height, its taller than a car so be careful around undercover carparks or low hanging braches.</li>
<li class="list-item">Don’t load all the heavy stuff on the left side, roundabouts are going to be a problem otherwise.</li>
        </ul>
      `
        },
        {
          id: 3,
          active: false,
          title: 'What are the truck rental charges?',
          details: `
        <p>That depends on where you are going and how long you need the truck for. Contact us for a quote but know this, we aim to do Brisbane’s best truckin’ deals!</p>
      `
        }
      ]
    }
  },
  mounted() {
    this.groupId = this.$el.id
  },
  computed: {
    getQuestions: function() {
      if (this.selectedCategory == 'set1') {
        return this.set1
      } else if (this.selectedCategory == 'set2') {
        return this.set2
      } else if (this.selectedCategory == 'set3') {
        return this.set3
      } else {
        return this.set1
      }
    }
  }
}
</script>

<style lang="scss">
$browser-context: 16;
$red: #cc4b37;

@function em($pixels, $context: $browser-context) {
  @return #{$pixels/$context}em;
}

.accordion {
  padding: 0;

  div:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }

  div:last-child .accordion-item-details {
    border-radius: 5px;
  }

  dd {
    margin-left: 0;
  }
}

.accordion-item-title-text {
  font-weight: bold;
}

.accordion-item-trigger,
.accordion-item-details-inner {
  padding: 0.75rem 1rem;
}

.accordion-item-title {
  position: relative;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0;
    // padding-right: 1.25rem;
  }
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  // background-color: transparent;
  border: none;
}

.accordion-item-title-text {
  padding-right: 1rem;
}

.accordion-icon {
  transition: transform 0.5s ease;
  transform: rotate(0deg);
  .is-active & {
    transform: rotate(90deg);
  }
}

.is-active {
  .accordion-item-trigger {
    background: var(--primary);
    color: white;
  }
  .fa-stack-1x {
    color: var(--primary);
  }
}

.accordion-item-details {
  overflow: hidden;
  background-color: whitesmoke;
  margin: 0;
  p {
    margin-bottom: 0;
  }
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.5s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}

.vnb__collapse-button {
  margin-right: 0 !important;
}
</style>
