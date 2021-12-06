<template>
  <div class="hello">
    <h3>About</h3>
    <div class="buttonsFlex">
      <button v-on:click="add(1)">Add a year</button>
      <button v-on:dblclick.once="add(10)">
        Add 10 years (double click just once)
      </button>
    </div>
    <h1>{{ age }}</h1>

    <div class="buttonsFlex">
      <button v-on:dblclick.once="substract(10)">
        Substract 10 (double click just once)
      </button>
      <button v-on:click="substract(1)">Substract</button>
    </div>
    <button class="buttonA" v-on:click="a++">Add to A</button>
    <p>A - {{ a }}</p>
    <p>Age + A = {{ addToA }}</p>
    <div id="canvas" v-on:mousemove="updateXY">{{ x }},{{ y }}</div>
    <a href="https://vuejs.org/" v-on:click.prevent="click"> Link to website</a>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      age: 23,
      a: 0,
      x: 0,
      y: 0,
    };
  },
  methods: {
    add: function (nr) {
      this.age = this.age + nr;
    },
    substract: function (nr) {
      this.age = this.age - nr;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    click: function () {
      alert("You clicked the link. Careful!");
    },
  },
  computed: {
    addToA: function () {
      return this.a + this.age;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: rgb(121, 29, 60);
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  margin-bottom: 30px;
}
.buttonsFlex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.buttonsFlex button {
  cursor: pointer;
  border: none;
  background: cornflowerblue;
  padding: 15px 20px;
  margin: 10px 0;
}
.buttonA {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: rgb(217, 250, 71);
  background: rgb(87, 146, 121);
  padding: 15px 20px;
  margin: 10px 0;
}
#canvas {
  width: 600px;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid #333;
  margin: 0 auto;
}
</style>
