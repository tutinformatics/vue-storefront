<template>
        <SfButton :disabled="disabled">
            Create
        </SfButton>
</template>
<script>
    import {SfButton} from "@storefront-ui/vue";

    export default {
        name: "button-style",
        components: {
            SfButton
        },
        data() {
            return {
                default: "Shop now",
                disabled: false
            };
        }
    };
</script>

