<template>
  <SfList :style="{ maxWidth: '186px', padding: '1rem' }">
    <SfListItem v-for="item in items" :key="item.label" :style="{ margin: '30px 0' }">
      <router-link :to="item.to"><SfMenuItem :label="item.label" /></router-link>

    </SfListItem>
  </SfList>
</template>
<script>
import { SfList } from "@storefront-ui/vue";
import { SfMenuItem } from "@storefront-ui/vue";
export default {
  name: "SidebarElements",
  components: {
    SfList,
    SfMenuItem
  },
  data() {
    return {
      items: [
        { label: "Offers", to: "/" },
        { label: "Orders", to: "/orders" }
      ]
    };
  }
};
</script>
