<template>
  <SfList :style="{ maxWidth: '186px', padding: '1rem' }">
    <SfListItem v-for="item in items" :key="item.label" :style="{ margin: '30px 0' }">
      <SfMenuItem :label="item.label" />
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
        { label: "Lemmikud" },
        { label: "Pakkumised" },
        { label: "Tellimused" },
        { label: "Arved" },
        { label: "Logi välja" }
      ]
    };
  }
};
</script>
