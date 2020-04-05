<template>
  <section>
    <SfProductCard style="height: 300px"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :badge-color="badgeColor"
      :title="item.productName"
      :link="link"
      :link-tag="linkTag"
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
    <div class="float-right">
      <SfButton>Telli</SfButton>
    </div>
  </section>
</template>
<script>
import { SfProductCard, SfButton } from "@storefront-ui/vue";

export default {
  name: "ProductItem",
  components: {
    SfProductCard,
    SfButton
  },
  props: {
    item: Object
  },
  data() {
    return {
      image: {
        mobile: { url: "./src/assets/ok.png" },
        desktop: { url: "./src/assets/ok.png" }
      },
      imageWidth: 100,
      imageHeight: 130,
      badgeColor: "color-primary",
      link: "",
      linkTag: "",
      wishlistIcon: "heart",
      isOnWishlistIcon: "heart_fill",
      isOnWishlist: false,
      isAddedToCart: false,
      addToCartDisabled: false,
      showAddToCartButton: false
    };
  }
};
</script>
