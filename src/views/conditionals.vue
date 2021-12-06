<template>
  <div class="conditionals">
    <h3>Conditionals</h3>
    <button v-on:click="(error = !error), (success = false)">
      Toggle Error
    </button>
    <button v-on:click="(success = !success), (error = false)">
      Toggle Success
    </button>
    <p class="success" v-if="success">Success!</p>
    <p class="error" v-if="error">Error!</p>
    <p class="success" v-show="success">Success! (show)</p>
    <p class="error" v-show="error">Error! (show)</p>
    <div class="sides">
      <div class="leftSide">
        <h4>Drinks</h4>
        <ul>
          <li v-for="(drink, i) in drinks" :key="i">{{ drink }}</li>
        </ul>
      </div>
      <div class="rightSide">
        <h4>Clients</h4>
        <ul>
          <li v-for="(client, i) in clients" :key="i">
            {{ i }}. Name & age: {{ client.name }} & {{ client.age }}
          </li>
        </ul>
      </div>
    </div>
    <h4>Bag here</h4>
    <div class="BagGame">
      <div v-bind:class="{ bag: !ended, burst: ended }"></div>
      <div class="bagHP">
        <div v-bind:style="{ width: health + '%' }"></div>
      </div>

      <div class="controls">
        <button v-if="!ended" v-on:click="punch()">Pounch</button>
        <button v-on:click="restart()">Restart</button>
      </div>
    </div>
    <div class="refs">
      <h4>Refs</h4>
      <input type="text" ref="input" />
      <button v-on:click="readRefs">Submit</button>
      <p>Your fav food: {{ output }}</p>
      <div ref="test">Test</div>
    </div>
    <global msg="Mesaj de test"></global>
  </div>
</template>

<script>
export default {
  name: "Conditionals",
  data() {
    return {
      error: false,
      success: false,
      health: 100,
      ended: false,
      output: "None",
      drinks: ["Pepsi", "Coca cola", "Fanta"],
      clients: [
        {
          name: "Daniel",
          age: 24,
        },
        {
          name: "Gabriel",
          age: 28,
        },
        {
          name: "Alex",
          age: 17,
        },
      ],
    };
  },
  methods: {
    punch: function () {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function () {
      this.health = 100;
      this.ended = false;
    },
    readRefs: function () {
      /* console.log(this.$refs.test.innerText); */
      this.output = this.$refs.input.value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conditionals {
  min-height: 80vh;
}
h3 {
  margin: 40px 0 0;
  color: rgb(82, 109, 184);
  font-family: "Roboto", sans-serif;
  font-size: 40px;
}
h4 {
  margin: 40px 0;
  margin-bottom: 10px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: center;
}
.success {
  color: rgb(75, 150, 45);
}
.error {
  color: rgb(230, 25, 25);
}
button {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: rgb(255, 255, 255);
  background: rgb(84, 80, 114);
  padding: 15px 20px;
  margin: 10px 5px;
}
.sides {
  display: flex;
  flex-direction: row;
}
.leftSide {
  width: 50%;
  margin-left: 0;
  text-align: center;
  padding: 20px;
  background: lightblue;
}
.rightSide {
  width: 50%;
  padding: 20px;
  background: rgb(203, 230, 173);
}
ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  padding: 0;
}
ul li {
  color: rgb(131, 48, 148);
}
.bag {
  width: 200px;
  height: 170px;
  margin: 0 auto;
  background: url("../assets/bag.png");
  background-size: 80%;
  background-repeat: no-repeat;
}
.burst {
  width: 200px;
  height: 170px;
  margin: 0 auto;
  background: url("../assets/bag2.png");
  background-size: 80%;
  background-repeat: no-repeat;
}
.bagHP {
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
.bagHP div {
  height: 20px;
  background: crimson;
}
.controls {
  width: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
