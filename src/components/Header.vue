<template>
  <div class="header">
    <Banner />
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Banner from "./Banner";

export default {
  name: "Header",

  components: {
    Navbar,
    Banner,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
</style>
