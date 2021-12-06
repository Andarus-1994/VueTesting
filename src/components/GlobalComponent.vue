<template>
  <div class="global">
    <h2>Global Component here</h2>
    <h5>Test {{ msg }}</h5>
  </div>
</template>

<script>
export default {
  name: "Global",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.global {
  background: rgb(90, 90, 119);
  width: 100%;
  margin: 50px 0;
  padding: 50px;
}
h5 {
  font-size: 35px;
  color: rgb(71, 158, 53) !important;
}
</style>
