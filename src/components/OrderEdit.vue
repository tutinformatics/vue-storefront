<template>
    <div>
        <h1>{{order.orderId}}</h1>
        <SfInput v-for="field in fields" :key="field.name"
                 v-model="order[field.name]"
                 :type="field.type"
                 :label="field.label"
                 :name="field.name"
        ></SfInput>
        <SfButton v-on:click="submit()">Submit</SfButton>
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
                    {name: "priority", label: "Priority", type: "number"}
                    ]
            }
        },
        mounted() {
            axios
                .get('https://flowerstore.ee/api/order/id/' + this.$route.params.id)
                .then(response => (this.order = (response["data"])))
        },
        methods: {
            submit() {
                axios({
                    method: 'put',
                    url: 'https://flowerstore.ee/api/order/id/' + this.order.orderId,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    data: this.getSubmitData()
                })
            },
            getSubmitData() {
                var result = {};
                for (var i = 0; i < this.fields.length; i++) {
                    var name = this.fields[i]["name"];
                    result[name] = this.order[name];
                }
                return result;
            }
        }
    }
</script>

<style scoped>

</style>
