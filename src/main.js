import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./views/home";
import About from "./views/about";
import Conditionals from "./views/conditionals";
import Global from "./components/GlobalComponent";
import Ninjas from "./views/ninjas";
import Blog from "./views/blog";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.config.productionTip = false;

// Custom directives
/*
Vue.directive("rainbow", {
  bind(el) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
    el.style.fontSize = "35px";
  },
});
*/
Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1400px";
      el.style.margin = "0 auto";
    }
    if (binding.value === "narrow") {
      el.style.maxWidth = "700px";
      el.style.margin = "0 auto";
    }
  },
});

//Filters
/*
Vue.filter("toUppercase", function (value) {
  return value.toUpperCase();
});

Vue.filter("snippet", function (value) {
  return value.slice(0, 6) + " ...";
});
*/
export const bus = new Vue();
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.component("global", Global);
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/conditionals", component: Conditionals },
  { path: "/ninjas", component: Ninjas },
  { path: "/blog", component: Blog },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  router: router,
  render: function (createElement) {
    return createElement(App);
  },
}).$mount("#app");
