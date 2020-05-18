<template>
    <SfSection :title-heading="order.orderId" :subtitle:heading="order.orderName">
    <b-list-group class="list-group list-group-flush text-left">
        <b-list-group-item>Order ID: {{order.orderId}}</b-list-group-item>
        <b-list-group-item>Order name: {{order.orderName}}</b-list-group-item>
        <b-list-group-item>Created: {{new Date(order.createdStamp)}}</b-list-group-item>
        <b-list-group-item>Last update: {{new Date(order.lastUpdatedStamp)}}</b-list-group-item>
    </b-list-group> 
    <section class="float-right mt-2">
        <router-link :to="'/orders/' + order.orderId + '/edit'"><SfButton>Muuda</SfButton></router-link>
    </section>
    </SfSection>
</template>

<script>
    import OrderService from "../../_services/order.service";
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
            OrderService.getOrderHeader(this.$route.params.id)
                .then(response => (this.order = response.data[0]));
        }
    }
</script>

<style scoped>

</style>
