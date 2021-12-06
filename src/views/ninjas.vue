<template>
  <div class="ninjas">
    <h5>Ninja List</h5>
    <ul>
      <li
        v-on:click="ninja.show = !ninja.show"
        v-for="(ninja, i) in ninjas"
        v-bind:key="i"
      >
        <h3>{{ ninja.name }}</h3>
        <p v-show="ninja.show">{{ ninja.spec }}</p>
      </li>
    </ul>
    <test-1 v-bind:title="title"></test-1>
    <test-2 v-bind:title="title"></test-2>
  </div>
</template>

<script>
import Test1 from "../components/Test1.vue";
import Test2 from "../components/Test2.vue";
export default {
  name: "Ninjas",
  data() {
    return {
      title: "Click to change title",
      ninjas: [
        {
          name: "Yasu",
          spec: "Master",
          show: false,
        },
        {
          name: "Mezon",
          spec: "Trainee",
          show: false,
        },
        {
          name: "Dafoo",
          spec: "Tech",
          show: false,
        },
      ],
    };
  },
  components: {
    Test1,
    Test2,
  },
  /*
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("before mount");
  },
  mounted() {
    alert("Mounted");
  },
  beforeUpdate() {
    alert("before Update");
  },
  */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ninjas {
  background: rgb(223, 223, 226);
  width: 100%;
  margin: 50px 0;
  padding: 50px 0;
  min-height: 80vh;
}
h5 {
  font-size: 35px;
  color: rgb(86, 87, 86) !important;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
}
ul li {
  font-size: 22px;
  color: rgb(52, 118, 134);
  cursor: pointer;
  padding: 20px 70px;
  border: 1px solid rgb(189, 189, 189);
  transition: 0.4s;
}
ul li:hover {
  border: 1px solid rgb(0, 0, 0);
}
ul li h3 {
  color: cornflowerblue;
}
</style>
