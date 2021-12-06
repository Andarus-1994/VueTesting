<template>
  <div class="Test1">
    <h3>Test 1 comp</h3>
    <p v-on:click="changeTitle">{{ title }}</p>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "Test1",
  props: {
    title: String,
  },
  methods: {
    changeTitle: function () {
      this.title = "New title now";
      bus.$emit("titleChanged", "New title now");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
p {
  cursor: pointer;
  color: rgb(62, 62, 184);
  text-decoration: underline;
}
</style>
