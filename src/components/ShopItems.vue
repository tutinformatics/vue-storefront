<template>
    <b-container>
        <h1><b>Find a perfect solution for yourself</b></h1>

        <SfBreadcrumbs :breadcrumbs="breadcrumbs"/>

        <b-container>
            <b-row cols="3">
                <b-col v-for="(item, index) in itemData.data" :key="index">
                    <ProductItem :item="item"/>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>
<script>
    import ProductItem from "./ProductItem";
    import axios from 'axios';
    import {SfBreadcrumbs} from "@storefront-ui/vue";

    export default {
        name: "ShopItems",
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
            axios
                .get('/api/product/type/DIGITAL_GOOD')
                .then(response => (this.itemData = response))
        }
    };
</script>
