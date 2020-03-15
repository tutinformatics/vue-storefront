<template>
<div>
  <p>H
  Kuidagi peab siia lisama itemeid
  vt seda: https://storybook.storefrontui.io/?path=/story/organisms-productcard--common</p>
  <h1>Also see</h1>
<!-- millegipärast ei tööta :/// -->
  <Item /> 
</div>
</template>
<script>

import { Item } from "./Item";
export default {
  name: "ShopItems",
  components: {
      Item
  }
};
</script>