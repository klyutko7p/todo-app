<template>
  <div class="mt-5">
    <h1 v-if="$store.getters.allDoneTasks.length >= 1">
      This your list of done tasks
    </h1>
    <div v-else>
      <h1 class="text-center">You don't have completed tasks yet</h1>
      <div class="text-center mt-5">
        <div
          class="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </div>
    <TodoCard
      v-for="task in $store.getters.allDoneTasks"
      :key="task.id"
      :task="task"
    ></TodoCard>
  </div>
</template>

<script>
import TodoCard from "./TodoCard.vue";

export default { components: { TodoCard } };
</script>

<style scoped></style>
