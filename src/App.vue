<template>
  <div id="app">
    <WeeklyFlyer />
  </div>
</template>

<script>
import WeeklyFlyer from "./components/WeeklyFlyer.vue";

export default {
  name: "App",
  components: {
    WeeklyFlyer,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
}
</style>
