<template>
  <div class="container">
    <vue-navigation-bar
      :options="navbarOptions"
      @vnb-item-clicked="vnbItemClicked"
      ><!-- Custom Slot - Uncomment to use -->
      <template v-slot:custom-section>
        <div class="custom-section-content">
          <a
            href="tel:1800246869"
            class="h1 mb-0 font-weight-bold text-decoration-none nav-number"
            >1800 24 68 69</a
          >
        </div>
      </template>
    </vue-navigation-bar>
  </div>
</template>

<script>
import 'vue-navigation-bar/dist/vue-navigation-bar.css'

export default {
  methods: {
    vnbItemClicked(text) {
      if (text === 'Get a Quote') {
        this.$modal.show('modal')
      }
    }
  },
  data() {
    return {
      navbarOptions: {
        elementId: 'nav',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImage: require('../assets/wlogo.svg'),
        brandImageAltText: 'brand-image',
        collapseButtonOpenColor: 'black',
        collapseButtonCloseColor: 'black',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'perspective',
        menuOptionsLeft: [
          // {
          //   type: "link",
          //   text: "Truck Hire",
          //   arrowColor: "orange",
          //   subMenuOptions: [
          //     {
          //       isLinkAction: true,
          //       type: "link",
          //       text: "Truck Rental",
          //       subText: "Best price truck rental. No truck licence needed.",
          //       path: { name: "home" },
          //       iconLeft: '<i class="fal fa-truck fa-fw"></i>'
          //     },
          //     {
          //       type: "hr"
          //     },
          //     {
          //       isLinkAction: true,
          //       type: "link",
          //       text: "Truck & Driver",
          //       subText: "Do the packing yourself and let us do the driving.",
          //       path: { name: "home" },
          //       iconLeft: '<i class="fal fa-user-alt fa-fw"></i>'
          //     },
          //     {
          //       type: "hr"
          //     },
          //     {
          //       isLinkAction: true,
          //       type: "link",
          //       text: "Truck & Movers",
          //       subText:
          //         "Let us do the heavy lifting and get your things where the need to go.",
          //       path: { name: "home" },
          //       iconLeft: '<i class="fal fa-people-carry fa-fw"></i>'
          //     }
          //   ]
          // },
          {
            type: 'link',
            text: 'Contact',
            arrowColor: 'orange',
            subMenuOptions: [
              {
                type: 'link',
                text: 'About Us',
                path: { name: 'About' }
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Contact',
                path: { name: 'Contact' },
                iconLeft: '<i class="fal fa-comment-alt-lines fa-fw"></i>'
              }
            ]
          }
        ],
        menuOptionsRight: [
          {
            isLinkAction: true,
            type: 'button',
            text: 'Get a Quote',
            path: '',
            class: 'btn btn-grad font-weight-bold',
            iconRight: '<i class="fal fa-comment-alt-lines fa-fw"></i>'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import '/path/to/node_modules/vue-navigation-bar.css';
.vnb {
  text-align: left;
  padding-top: 0;
  padding-bottom: 0;
  &__brand-image-wrapper {
    &__link {
      &__image {
        max-height: 48px;
      }
    }
  }
  .custom-section-content {
    text-align: right;
    margin-left: auto;
    font-family: Helvetica;
    .nav-number {
      color: var(--dark-color);
      &:hover {
        color: var(--primary);
      }
    }
  }
  .btn-grad {
    color: white !important;
    background-image: linear-gradient(
      15deg,
      var(--primary) 40%,
      var(--light-color)
    );
    background-size: 300%;
    background-position: 50%;
    border: none !important;
    transition: background-position 0.15s ease-in-out;
    &:hover {
      background-position: 100%;
      color: white;
      border: none !important;
    }
  }
  svg {
    width: 48px !important;
  }
  &__menu-options {
    &--left {
      .fa,
      .far,
      .fas,
      .fal {
        color: rgb(255, 117, 37);
      }
    }
    &--right {
      margin-left: 1rem;
    }
    &__option {
      &__link {
        font-size: 1.25rem;
        &:hover {
        }
      }

      &__arrow {
        max-height: 10px !important;
      }
    }
  }

  &__sub-menu-options {
    padding: 0;
    hr {
      margin: 0;
    }
    &__option {
      &__link {
        &:hover {
          border-left: 2px solid rgb(255, 104, 34);
          background-color: rgb(245, 239, 239);
        }
      }
    }
  }

  &__popup {
    &__top {
      padding: 1rem;
    }
    &__bottom {
      padding-top: 0;
      padding-bottom: 0;
      &__custom-section {
        text-align: center;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        .custom-section-content {
          text-align: center;
          .nav-number {
            color: rgb(34, 32, 32);
            &:hover {
              color: var(--primary);
            }
          }
        }
      }
      &__menu-options {
        margin-bottom: 0;
        &__option {
          text-align: center;
          &__link--no-highlight {
            visibility: hidden;
            padding: 0 0 0 0;
            height: 0;
          }
        }
      }
    }
  }
}
</style>
