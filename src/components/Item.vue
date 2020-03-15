<template>
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
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
  ></SfProductCard>
</template>
<script>
import { SfProductCard } from "@storefront-ui/vue";
export default {
  name: "Item",
  components: {
    SfProductCard
  },
  data() {
    return {
      image: {
        mobile: { url: "/assets/storybook/Home/productB.jpg" },
        desktop: { url: "/assets/storybook/Home/productB.jpg" }
      },
      imageWidth: 216,
      imageHeight: 326,
      badgeLabel: "-50%",
      badgeColor: "color-primary",
      title: "Cotton Sweater",
      link: "",
      linkTag: "",
      scoreRating: 4,
      maxRating: 5,
      reviewsCount: 7,
      regularPrice: "$10,99",
      specialPrice: "$5,09",
      wishlistIcon: "heart",
      isOnWishlistIcon: "heart_fill",
      isOnWishlist: false,
      showAddToCartButton: false,
      isAddedToCart: false,
      addToCartDisabled: false
    };
  }
};
</script>