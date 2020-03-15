<template>
  <SfSidebar
    :visible="isSidebarOpen"
    @close="isSidebarOpen = false"
    :title="title"
    :subtitle="subtitle"
    :heading-level="headingLevel"
    :button="button"
    :overlay="overlay"
  >
  <!-- Siia list -->
  <SidebarElements />
  </SfSidebar>
</template>
<script>
import { SfSidebar } from "@storefront-ui/vue";
import SidebarElements from "./SidebarElements";

export default {
  name: "Sidebar",
  components: {
    SfSidebar,
    SidebarElements
  },
  data() {
    return {
      isSidebarOpen: true,
      title: "CHANGE THIS",
      subtitle: "Maybe name?",
      headingLevel: 1,
      overlay: false,
      button: false
    };
  }
};
</script>