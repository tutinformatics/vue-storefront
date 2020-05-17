<template>

    <div>
        <SfTable>
            <h1>Orders</h1>
            <SfTableHeading>
                <SfTableHeader v-for="header in tableHeaders" :key="header">{{
                    header
                    }}</SfTableHeader>
            </SfTableHeading>
            <SfTableRow v-for="(row, key) in tableRows" :key="key">
                <SfTableData><router-link :to="'orders/' + row[0]">{{row[0]}}</router-link></SfTableData>
                <SfTableData v-for="data in row.slice(1)" :key="data">{{
                    data
                    }}</SfTableData>
            </SfTableRow>
        </SfTable>
    </div>
</template>

<script>
    import { SfTable } from "@storefront-ui/vue";
    import axios from "axios";
    export default {
        name: "OrderList",
        components: {
            SfTable
        },
        data() {
            return {
                tableHeaders: [
                    "Id",
                    "Order Name",
                    "Creation Date",
                    "Priority"
                ],
                tableRows: []
            }
        },
        mounted() {
            axios
                .get('/api/order/DEMO_CUSTOMER')
                .then(response => (this.updateData(response["data"])))
        },
        methods: {
            updateData(jsonRows) {
                var rows = [];
                for (let i = 0; i < jsonRows.length; i++) {
                    rows.push([
                        jsonRows[i]["orderId"],
                        jsonRows[i]["orderName"],
                        jsonRows[i]["createdStamp"],
                        jsonRows[i]["priority"]
                    ])
                }
                this.tableRows = rows;
            }
        }
    }
</script>

<style scoped>

</style>
