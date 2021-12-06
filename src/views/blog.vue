<template>
  <div class="blog">
    <h3>Blog will be here</h3>
    <div class="form">
      <div class="containerInput">
        <label>Title</label>
        <input v-model.lazy="blog.title" type="text" />
      </div>
      <div class="containerInput">
        <label>Content </label>
        <input v-model.lazy="blog.content" type="text" />
      </div>
      <div class="checkboxes">
        <div>
          <label>Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories" />
        </div>
        <div>
          <label>Wizards</label>
          <input type="checkbox" value="wizards" v-model="blog.categories" />
        </div>
        <div>
          <label>Fans</label>
          <input type="checkbox" value="fans" v-model="blog.categories" />
        </div>
      </div>
      <label>Author</label>
      <select v-model="blog.author">
        <option v-for="(author, i) in authors" v-bind:key="i">
          {{ author }}
        </option>
      </select>
    </div>
    <div class="blogDetails">
      <h3>Blog Details</h3>
      <div class="boxBlogDetails">
        <p>Here will be the title: {{ blog.title }}</p>
        <p>Here will be the content: {{ blog.content }}</p>
        <h2>Blog Categories:</h2>
        <ul>
          <li v-for="(category, i) in blog.categories" v-bind:key="i">
            {{ category }}
          </li>
        </ul>
        <p>Author: {{ blog.author }}</p>
      </div>
    </div>
    <h3>Test API</h3>
    <input
      class="searchUserInput"
      type="text"
      v-model="search"
      placeholder="Search User"
    />
    <div v-if="objectAPI.loading" class="loading">Loading</div>
    <div v-if="!objectAPI.loading" class="users" v-theme="theme">
      <div v-for="(user, i) in filteredUsers" v-bind:key="i" class="contentApi">
        <h2 v-rainbow>{{ user.name | toUppercase }}</h2>
        <p>{{ user.username }}</p>
        <p>{{ user.phone | snippet }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["The Test 1", "The Vue Man", "The Prime Testan"],
      objectAPI: {
        loading: true,
        data: [],
      },
      search: "",
      theme: "wide",
    };
  },

  created() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.objectAPI.data = response.data;
        this.objectAPI.loading = false;
        console.log(response.data);
      });
  },
  computed: {
    filteredUsers: function () {
      return this.objectAPI.data.filter((user) => {
        console.log(user.name);
        return user.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 8) + " ...";
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
        el.style.fontSize = "35px";
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog {
  min-height: 80vh;
}
h3 {
  margin: 40px 0;
  font-size: 40px;
}
.form {
  display: flex;
  flex-direction: column;
}
.form .containerInput {
  width: 250px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form .containerInput input {
  padding: 5px;
  border: none;
  background: rgb(160, 157, 147);
}
.boxBlogDetails {
  border: 1px dotted rgb(79, 79, 87);
  width: 450px;
  margin: 0 auto;
  padding: 50px 0;
}
.checkboxes {
  width: 250px;
  margin: 0 auto;
  justify-content: start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.checkboxes label {
  display: inline-block;
  width: 80px;
  text-align: left;
}
select {
  width: 150px;
  margin: 0 auto;
}
.users {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px 0;
}
.contentApi {
  background: rgb(236, 235, 235);
  width: 400px;
  border: 1px solid rgb(149, 166, 177);
  padding: 20px 5px;
  margin: 15px auto;
}
.searchUserInput {
  padding: 5px 10px;
}
</style>
