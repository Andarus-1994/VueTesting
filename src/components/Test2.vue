<template>
  <div class="Test2">
    <h2>Test 2 Comp</h2>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "Test2",
  props: {
    title: String,
  },
  created() {
    bus.$on("titleChanged", (data) => {
      this.title = data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
