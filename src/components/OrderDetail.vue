<template>
    <SfSection :title-heading="order.orderId" :subtitle:heading="order.orderName">
    <ul>
        <li>{{order}}</li>
    </ul>
    <router-link :to="'/orders/' + order.orderId + '/edit'"><SfButton>Muuda</SfButton></router-link>
    </SfSection>
</template>

<script>
    import axios from "axios";
    import { SfSection, SfButton } from "@storefront-ui/vue";

    export default {
        name: "OrderDetail",
        components: {
            SfSection,
            SfButton
        },
        data() {
            return {
                order: {}
            }
        },
        mounted() {
            axios
                .get('https://flowerstore.ee/api/order/id/' + this.$route.params.id)
                .then(response => (this.order = (response["data"])))
        }
    }
</script>

<style scoped>

</style>
