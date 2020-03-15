<template>
  <div>
    <p>
      H
      Kuidagi peab siia lisama itemeid
      vt seda: https://storybook.storefrontui.io/?path=/story/organisms-productcard--common
    </p>
    <!-- for loop here -->
    <b-container>
      <b-row cols="4">
        <b-col>
          <ProductItem />
        </b-col>
        <b-col>
          <ProductItem />
        </b-col>
        <b-col>
          <ProductItem />
        </b-col>
        <b-col>
          <ProductItem />
        </b-col>
                <b-col>
          <ProductItem />
        </b-col>
        <b-col>
          <ProductItem />
        </b-col>
        <b-col>
          <ProductItem />
        </b-col>
        <b-col>
          <ProductItem />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProductItem from "./ProductItem";
export default {
  name: "ShopItems",
  components: {
    ProductItem
  }
};
</script>