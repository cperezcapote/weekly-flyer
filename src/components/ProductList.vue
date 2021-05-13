<template>
  <div class="product-lit">
    <MainProduct />
    <Product
      v-for="product in products"
      :key="`product-${product.id}`"
      :img="product.img"
    />
  </div>
</template>

<script>
import MainProduct from "./MainProduct.vue";
import Product from "./Product";

export default {
  name: "WeeklyFlyer",
  components: {
    MainProduct,
    Product,
  },

  data() {
    return {
      products: [
        { id: 1, img: "raspberries.jpg" },
        { id: 2, img: "points.jpg" },
        { id: 3, img: "cerial.jpg" },
        { id: 4, img: "bacon.jpg" },
        { id: 5, img: "grocery.jpg" },
        { id: 6, img: "dairy.jpg" },
      ],
    };
  },
};
</script>

<style>
.product-lit {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
}
</style>
