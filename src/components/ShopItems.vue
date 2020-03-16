<template>
  <div>
    <h><b>Leia endale sobiv lahendus</b></h>

    <!-- See tuleks teha alammenüüks (hetkel lihtsalt tekstina ja joon all) -->
    <p>Kõik Arendus Raamistikud Andmebaasid</p>

    <!-- for loop here -->
    <b-container>
      <b-row cols="3">
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
