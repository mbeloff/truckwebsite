<template>
  <div class="container">
    <vue-navigation-bar
      :options="navbarOptions"
      @vnb-item-clicked="vnbItemClicked"
    />
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";

export default {
  methods: {
    vnbItemClicked(text) {
      if (text === "Get a Quote") {
        this.$modal.show("modal");
      }
    }
  },
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
            isLinkAction: true,
            type: "button",
            text: "Get a Quote",
            path: "",
            class: "btn btn-grad",
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
  text-align: left;
  .btn-book {
    background: #00c4a3;
    color: white;
    &:hover {
      background: darken(#00c4a3, 10%);
      color: white;
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
