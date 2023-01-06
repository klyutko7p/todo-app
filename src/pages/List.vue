<template>
  <div>
    <div>
      <h1 class="text-center mb-5">Find your task right here!</h1>
      <TodoList></TodoList>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default { components: { TodoList } };
</script>

<style scoped></style>
