<template>
  <div id="app">
    <nav>
      <router-link to="/"> Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/conditionals">Conditionals & more</router-link>
      <router-link to="/ninjas">Ninjas</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>

    <router-view> </router-view>
    <footer-app v-bind:title="title"></footer-app>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      title: "Copyright 2021 Andrei",
      name: "Alex",
      job: "Programmer",
      website: "https://twitter.com/RomainCapelle",
      websiteTag:
        '<a href="https://twitter.com/RomainCapelle" target="_blank">Website with Tag</a>',
    };
  },
  components: {
    "footer-app": Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
* {
  color: rgb(2, 2, 2);
  font-family: "Raleway", sans-serif;
}
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background: linear-gradient(
    340deg,
    rgb(233, 232, 232) 30%,
    rgb(235, 235, 235)
  );
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(46, 46, 70);
  padding: 0px 10px;
  margin-bottom: 50px;
}
nav a {
  padding: 15px 10px;
  margin: 0 15px;
  color: rgb(243, 243, 243);
  text-decoration: none;
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  transition: 0.4s;
}
nav a:hover {
  color: rgb(32, 190, 98);
}
nav .router-link-exact-active {
  color: rgb(25, 221, 107);
}
</style>
