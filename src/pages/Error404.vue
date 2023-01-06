<template>
  <div>
    <h1 class="text-center">That page is doesn't exist</h1>
    <my-button
      @click="this.$router.push('/')"
      class="d-flex align-items-center justify-content-center"
      >Back to home</my-button
    >
  </div>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
export default {
  components: { MyButton },
};
</script>

<style scoped></style>
