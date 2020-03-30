<template>

    <div>
        <SfTable :class="customClass">
            <h1>Orders</h1>
            <SfTableHeading>
                <SfTableHeader v-for="header in tableHeaders" :key="header">{{
                    header
                    }}</SfTableHeader>
            </SfTableHeading>
            <SfTableRow v-for="(row, key) in tableRows" :key="key">
                <SfTableData v-for="data in row" :key="data">{{
                    data
                    }}</SfTableData>
            </SfTableRow>
        </SfTable>
        Could add orders from <br>
        <a href="https://flowerstore.ee/api/order/DEMO_CUSTOMER">https://flowerstore.ee/api/order/DEMO_CUSTOMER</a> <br>
        Maybe with button to edit order?
    </div>
</template>

<script>
    import { SfTable } from "@storefront-ui/vue";
    export default {
        name: "Orders",
        components: {
            SfTable
        },
        data() {
            return {
                tableHeaders: [
                    "Order Name",
                    "Creation Date",
                    "Priority"
                ],
                tableRows: [
                    ["Ofbiz", "2020-03-30 10:00", 3],
                    ["Aurelia", "2020-03-30 12:00", 4]
                ]
            }
        }
    }
</script>

<style scoped>

</style>
