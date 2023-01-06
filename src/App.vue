<template>
  <div>
    <navbar></navbar>
    <div class="container app">
      <router-view class=" "></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  mounted() {
    this.$store.commit("initializeVars");
  },
};
</script>

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

body {
  background: rgb(22, 22, 32);
}

.form-control {
  background: rgb(22, 22, 32);
  border-color: #35353c;
  border-radius: 20px;
  color: rgb(161, 161, 161);
}

.form-control:focus {
  background: rgb(22, 22, 32);
  color: white;
}

.form-select {
  background: rgb(22, 22, 32);
  border-color: #35353c;
  color: rgb(161, 161, 161);
  border-radius: 20px;
}

.form-check-input:checked {
  background: RGB(175, 35, 80);
  border-color: RGB(175, 35, 80);
}

.form-check-input {
  background: rgb(36, 36, 53);
}

.form-check-label {
  color: rgb(161, 161, 161);
}

h1 {
  color: rgb(161, 161, 161);
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>
