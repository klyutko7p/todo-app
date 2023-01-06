<template>
  <div class="mb-5 navbar-main">
    <div class="burger-menu-btn" @click="toggleBurger(this)">
      <i class="fa-solid fa-bars" style="color: rgb(92, 97, 99)"></i>
    </div>
    <div class="burger-menu">
      <nav class="burger-menu-nav text-center">
        <li @click="this.$router.push('/'), toggleBurger(this)">
          <i class="fa fa-home" aria-hidden="true"></i>
        </li>
        <span @click="this.$router.push('/'), toggleBurger(this)">Home</span>
        <li @click="this.$router.push('/create'), toggleBurger(this)">
          <i class="fa-solid fa-circle-plus"></i>
        </li>
        <span @click="this.$router.push('/create'), toggleBurger(this)"
          >Create</span
        >
        <li @click="this.$router.push('/list'), toggleBurger(this)">
          <i class="fa-solid fa-list-ul"></i>
        </li>
        <span @click="this.$router.push('/list'), toggleBurger(this)"
          >List</span
        >
        <li @click="this.$router.push('/done'), toggleBurger(this)">
          <i class="fa-solid fa-circle-check"></i>
        </li>
        <span @click="this.$router.push('/done'), toggleBurger(this)"
          >Done</span
        >
        <li @click="clearStorage">
          <i class="fa-solid fa-trash"></i>
        </li>
        <span @click="clearStorage">Clear</span>
      </nav>
    </div>
    <nav class="navbar">
      <ul class="navbar-ul">
        <li @click="this.$router.push('/')">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </li>
        <li @click="this.$router.push('/create')">
          <i class="fa-solid fa-circle-plus"></i>
          <span>Create task</span>
        </li>
        <li @click="this.$router.push('/list')">
          <i class="fa-solid fa-list-ul"></i>
          <span
            >List
            <sup v-if="$store.state.tasks.length > 0">{{
              $store.state.tasks.length
            }}</sup></span
          >
        </li>
        <li @click="this.$router.push('/done')">
          <i class="fa-solid fa-circle-check"></i>
          <span
            >Done<sup class="mt-1" v-if="$store.state.doneTasks.length > 0"
              >+{{ $store.state.doneTasks.length }}</sup
            ></span
          >
        </li>
        <li @click="clearStorage">
          <i class="fa-solid fa-trash"></i>
          <span>Clear storage</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    clearStorage() {
      let question = confirm("Are you sure to delete yours data?");
      if (question === true) {
        localStorage.clear();
        location.reload();
      }
      return;
    },
    toggleBurger() {
      this.$el.querySelector(".burger-menu-btn").classList.toggle("active");
      this.$el.querySelector(".burger-menu").classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.navbar-main {
  background: rgb(36, 36, 53);
}

.burger-menu-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 300px;
}

.burger-menu-nav span {
  font-size: 20px;
  color: white;
}

.burger-menu-btn {
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 1000;
  overflow: hidden;
  display: none;
  cursor: pointer;
}

.burger-menu-btn span {
  width: 45px;
  height: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  transition: all 0.5s;
}

.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  padding: 15px;
  z-index: 999;
  background: rgb(36, 36, 53);
  border-right: 1px solid white;
  opacity: 95%;
  transform: translateX(-100%);
  transition: transform 0.5s;
}

.burger-menu.active {
  transform: translateX(0);
}

.burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.burger-menu li {
  list-style-type: none;
  font-size: calc(0.5em + 4vw);
  margin-bottom: 20px;
  opacity: 75%;
  color: rgb(250, 250, 250);
  transition: 0.2s;
  text-align: center;
}

.burger-menu li:hover {
  opacity: 100%;
  transition: 0.2s;
}

.navbar {
  opacity: 90%;
  display: flex;
  justify-content: center;
}

.navbar-ul {
  display: flex;
}

@media (max-width: 700px) {
  .navbar-ul {
    display: none;
  }
  .burger-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
}

.navbar {
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
}

.navbar li {
  cursor: pointer;
  list-style-type: none;
  font-size: 25px;
  margin-right: 30px;
  margin-bottom: 20px;
  color: rgb(92, 97, 99);
  transition: 0.2s;
}

.navbar li:hover {
  color: rgb(196, 196, 196);
  transition: 0.2s;
}

.navbar li > i {
  margin-right: 5px;
}

.navbar li > span {
  font-size: 20px;
}

@media screen and (max-width: 785px) {
  .navbar li > span {
    display: none;
  }
}
</style>
