<template>
  <SfButton :class="customClass" :disabled="disabled">
    Create
  </SfButton>
</template>
<script>
import { SfButton } from "@storefront-ui/vue";
export default {
  components: {
    SfButton
  },
  data() {
    return {
      default: "Shop now",
      disabled: false
    };
  }
};
</script>