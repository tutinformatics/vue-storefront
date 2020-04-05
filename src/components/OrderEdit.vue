<template>
    <div>
        <h1>{{order.orderId}}</h1>
        <SfInput v-for="field in fields" :key="field.name"
                 v-model="order[field.name]"
                 :type="field.type"
                 :label="field.label"
                 :name="field.name"
        ></SfInput>
        <SfButton>Submit</SfButton>
    </div>
</template>

<script>
    import axios from "axios";
    import { SfInput, SfButton } from "@storefront-ui/vue";
    export default {
        name: "OrderEdit",
        components: {
            SfInput,
            SfButton
        },
        data() {
            return {
                order: {},
                fields: [
                    {name: "orderName", label: "Order Name", type: "text"},
                    {name: "priority", label: "Priority", type: "number"},
                    {name: "orderDate", label: "Order Date", type: "date"}]
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
