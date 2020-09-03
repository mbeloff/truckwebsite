i<template>
  <vue-navigation-bar :options="navbarOptions" />
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";

export default {
  data() {
    return {
      navbarOptions: {
        elementId: "nav",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require("../assets/logo-sm.svg"),
        brandImageAltText: "brand-image",
        collapseButtonOpenColor: "black",
        collapseButtonCloseColor: "black",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: "link",
            text: "Truck Hire",
            arrowColor: "orange",
            subMenuOptions: [
              {
                isLinkAction: true,
                type: "link",
                text: "Truck Rental",
                subText: "Best price truck rental. No truck licence needed.",
                path: { name: "about" },
                iconLeft: '<i class="fal fa-truck fa-fw"></i>'
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Truck & Driver",
                subText: "Do the packing yourself and let us do the driving.",
                path: { name: "locations" },
                iconLeft: '<i class="fal fa-user-alt fa-fw"></i>'
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Truck & Movers",
                subText:
                  "An extra pair of hands to help load and get your things where the need to go.",
                path: { name: "blog" },
                iconLeft: '<i class="fal fa-people-carry fa-fw"></i>'
              }
            ]
          },
          {
            type: "link",
            text: "About",
            arrowColor: "orange",
            subMenuOptions: [
              {
                type: "link",
                text: "About Us",
                path: { name: "about-us" }
              },
              {
                type: "link",
                text: "FAQ",
                path: { name: "faq" }
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Contact",
                path: { name: "contact" },
                iconLeft: '<i class="fal fa-comment-alt-lines fa-fw"></i>'
              }
            ]
          }
        ],
        menuOptionsRight: [
          {
            type: "link",
            text: "1800 12 34 56"
          },
          {
            type: "button",
            text: "Book Now",
            class: "btn btn-book",
            path: { name: "login" },
            iconRight: '<i class="fal fa-comment-alt-lines fa-fw"></i>'
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "/path/to/node_modules/vue-navigation-bar.css";
.vnb {
  .btn-book {
    background: #1a6aff;
    color: white;
    &:hover {
      background: darken(#1a6aff, 10%);
      color: white;
    }
  }
  svg {
    width: 20px !important;
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
  }

  &__sub-menu-options {
    &__option {
      &__link {
        &:hover {
          border-left: 2px solid rgb(255, 104, 34);
        }
      }
    }
  }
}
</style>
