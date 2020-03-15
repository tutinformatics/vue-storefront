<template>
  <div id="app">
    <header>
      <HeaderComponent />
    </header>
    <div>
      <Sidebar />
      <ShopItems />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import Sidebar from "./components/Sidebar";
import ShopItems from './components/ShopItems';

export default {
  name: "App",
  components: {
    HeaderComponent,
    Sidebar,
    ShopItems
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
