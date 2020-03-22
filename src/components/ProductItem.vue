<template>
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="product.productId"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:is-added-to-cart="alert('@click:is-added-to-cart')"
    @click:wishlist="alert('@click:wishlist')"
    @click:reviews="alert('@click:reviews')"
  />
</template>
<script>
import { SfProductCard } from "@storefront-ui/vue";
export default {
  name: 'ProductItem',
  components: {
    SfProductCard
  },
  data() {
    return {
      image: {
        mobile: { url: "/assets/logo.jpg" },
        desktop: { url: "/assets/logo.jpg" }
      },
      imageWidth: 100,
      imageHeight: 130,
      badgeColor: "color-primary",
      title: "Teenus",
      link: "",
      linkTag: "",
      //scoreRating: 4,
      //maxRating: 5,
     //reviewsCount: 7,
      regularPrice: "10,99€",
      specialPrice: "5,09€",
      wishlistIcon: "heart",
      isOnWishlistIcon: "heart_fill",
      isOnWishlist: false,
      //showAddToCartButton: false,
      isAddedToCart: false,
      addToCartDisabled: false,
    };
  },
  props: {
    product: Object
  }
};
</script>
