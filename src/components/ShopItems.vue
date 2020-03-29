<template>
  <b-container>
    <h1><b>Leia endale sobiv lahendus</b></h1>

    <!-- See tuleks teha alammenüüks (hetkel lihtsalt tekstina ja joon all) -->
    <p>Kõik Arendus Raamistikud Andmebaasid</p>

    <!-- for loop here -->
    <b-container>
      <b-row cols="3">
        <b-col v-for="(item, index) in itemData.data" :key="index">
          <ProductItem :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
import ProductItem from "./ProductItem";
import axios from 'axios';

export default {
  name: "ShopItems",
  components: {
    ProductItem
  },
  data() {
    return {
      itemData: null
    }
  }, 
  mounted() {
    axios
      .get('https://161.35.21.253/api/product/type/DIGITAL_GOOD')
      .then(response => (this.itemData = response))
  }
};
</script>
