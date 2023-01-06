<template>
  <div>
    <div class="text-center main">
      <h1>Tasks, just tasks</h1>
      <p>
        Keep track of the daily tasks in life and <br />
        get that satisfaction upon completion
      </p>
      <div class="d-flex align-items-center justify-content-center">
        <my-button @click="this.$router.push('/create')">Get started</my-button>
      </div>
      <h1 style="font-size: 40px; margin-top: 100px">Author:</h1>
      <div class="feedback">
        <a href="https://github.com/klyutko7p ">
          <i class="fa fa-github" aria-hidden="true"></i
        ></a>
        <a href="https://vk.com/klyutko7p"
          ><i class="fa fa-vk" aria-hidden="true"></i
        ></a>
        <a href="https://t.me/klyutko7p"
          ><i class="fa fa-telegram" aria-hidden="true"></i
        ></a>
        <a href="https://steamcommunity.com/id/klyutko7p/">
          <i class="fa fa-steam" aria-hidden="true"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
export default {
  components: {},
};
MyButton;
</script>

<style scoped>
.main {
  margin-top: 50px;
}

.main h1 {
  font-size: 75px;
  margin-bottom: 20px;
  color: rgb(196, 196, 196);
}

.main p {
  font-size: 20px;
  margin-bottom: 20px;
  color: rgb(155, 155, 155);
}

.feedback i {
  cursor: pointer;
  font-size: 30px;
  color: rgb(155, 155, 155);
  margin: 0 15px;
  transition: 0.2s;
}

.feedback i:hover {
  opacity: 50%;
  transition: 0.2s;
}
</style>
