<template>
    <b-container>
        <h1><b>Find a perfect solution for yourself</b></h1>

        <SfBreadcrumbs :breadcrumbs="breadcrumbs"/>

        <b-container>
            <b-row cols="3">
                <b-col v-for="(item, index) in itemData" :key="index">
                    <ProductItem :item="item"/>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>
<script>
    import ProductItem from "../../components/ProductItem";
    import {SfBreadcrumbs} from "@storefront-ui/vue";
    import ProductService from "../../_services/product.service";

    export default {
        name: "ProductList",
        components: {
            ProductItem,
            SfBreadcrumbs
        },
        data() {
            return {
                itemData: {},
                breadcrumbs: [
                    {text: "All", route: {link: "#"}},
                    {text: "Development", route: {link: "#"}},
                    {text: "Frameworks", route: {link: "#"}},
                    {text: "Databases", route: {link: "#"}}]
            }
        },
        mounted() {
            ProductService.getProductList()
                .then(response => (this.itemData = response.data));
        }
    };
</script>
