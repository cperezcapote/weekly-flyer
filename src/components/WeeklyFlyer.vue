<template>
  <div class="flyer-container">
    <Header />
    <ProductList />
  </div>
</template>

<script>
import Header from "./Header.vue";
import ProductList from "./ProductList";

export default {
  name: "WeeklyFlyer",
  components: {
    Header,
    ProductList,
  },
};
</script>

<style scoped>
.flyer-container {
  max-width: 1080px; /** Max size of the screen */
  width: 100%;
}
</style>
