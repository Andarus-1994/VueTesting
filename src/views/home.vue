<template>
  <div class="home">
    <h3>Home</h3>
    <HelloWorld msg="Message Change" />
    {{ greet("night") }}
    <br />
    {{ greet("day") }}
    <br />
    <a :href="website" target="_blank">{{ website }}</a>

    <p v-html="websiteTag"></p>

    <label>Name</label>
    <input type="text" v-model="name" />
    <label>On enter</label>
    <p>{{ name }}</p>

    <div
      v-on:click="available = !available"
      v-bind:class="{ available: available }"
      style="cursor: pointer"
    >
      Test Div Bind
    </div>
    <button v-on:click="nearby = !nearby">Toggle Nearby</button>
    <button v-on:click="available = !available">Toggle Avaiable</button>
    <div v-bind:class="compClasses">
      <span>Test</span>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "Alex",
      job: "Programmer",
      website: "https://twitter.com/RomainCapelle",
      websiteTag:
        '<a href="https://twitter.com/RomainCapelle" target="_blank">Website with Tag</a>',
      available: false,
      nearby: false,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    logName: function (event) {
      this.name = event.target.value;
    },
    greet: function (time) {
      return "Good " + time + " " + this.name + " is a " + this.job;
    },
  },
  computed: {
    compClasses: function () {
      return {
        avaiable: this.available,
        nearby: this.nearby,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  min-height: 80vh;
}
h3 {
  margin: 40px 0 0;
  color: rgb(104, 150, 61);
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  margin-bottom: 30px;
}
.available {
  background-color: green;
}
</style>
