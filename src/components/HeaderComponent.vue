<template>
  <div>
    <SfHeader
      :active-icon="activeIcon"
      :has-mobile-search="hasMobileSearch"
      :search-placeholder="searchPlaceholder"
      :cart-icon="cartIcon"
      :wishlist-icon="wishlistIcon"
      :is-sticky="isSticky"
      :account-icon="accountIcon"
      :cart-items-qty="cartItemsQty"
      @click:cart="alert('@click:cart')"
      @click:wishlist="alert('@click:wishlist')"
      @click:account="alert('@click:account')"
    >
      <template #search>
        <div :style="{margin: '0 0 0 auto'}">
          <create-button />
          </div>
      </template>
      <template #navigation>
        <div
          :style="{margin: '0 0 0 1.25rem', display: 'flex', alignItems:'center', height: '100%'}"
        >
          <SfSearchBar>
            <template #clear-icon>
              <span class="sf-search-bar__clear-icon">🧹</span>
            </template>
          </SfSearchBar>
        </div>
      </template>
    </SfHeader>
  </div>
</template>
<script>
import { SfHeader } from "@storefront-ui/vue";
import { SfSearchBar } from "@storefront-ui/vue";
import CreateButton from "./buttons/CreateButton.vue"
export default {
  components: {
    SfHeader,
    SfSearchBar,
    CreateButton
  },
  data() {
    return {
      isMobile: false,
      navigation: [],
      activeIcon: "account",
      hasMobileSearch: false,
      isSticky: true,
      searchPlaceholder: "Search for items",
      cartIcon: "empty_cart",
      wishlistIcon: "heart",
      accountIcon: "profile",
      cartItemsQty: "0"
    };
  }
};
</script>
