<template>
  <div class="product">
    <div class="img-ctn">
      <img class="responsive" :src="require(`@/assets/${img}`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",

  props: {
    img: String,
  },
};
</script>

<style scoped>
.product {
  display: flex;
  width: 25%;
}
</style>
