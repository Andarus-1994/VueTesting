<template>
  <footer>
    <h3 v-on:click="title = 'Vue Copyright 2024'">{{ title }}</h3>
  </footer>
</template>

<script>
export default {
  name: "Global",
  props: {
    title: String,
  },
  data() {
    return {
      copyright: "Copyright 2021 Test App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: rgb(37, 37, 44);
  width: 100%;
  margin-top: auto;
  margin-bottom: 0;
  padding: 20px;
}
h3 {
  font-size: 15px;
  color: rgb(233, 233, 233);
}
</style>
