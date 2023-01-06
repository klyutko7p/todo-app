<template>
  <div class="mt-5 mb-5">
    <input
      @input="findTask"
      v-model.trim="searchQuery"
      class="form-control mb-5 fs-3"
      placeholder="Enter title"
    />

    <div>
      <select
        v-model="selectedFilter"
        class="me-4 form-select fs-3"
        @change="filter"
      >
        <option value="" class="dropdown-item">All categories</option>
        <option
          v-for="category in $store.state.categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <div v-if="$store.getters.allTasks.length >= 1" class="mt-5">
      <h1 v-if="this.tasks.length >= 1">Tasks - {{ allTasks.length }}</h1>
      <div v-if="this.tasks.length == 0" class="text-center mt-5">
        <h1 class="mb-3">Sorry, tasks with these filters doesn't exist</h1>
        <my-button class="d-flex justify-content-center" @click="clear"
          >CLEAR FILTERS</my-button
        >
      </div>

      <div class="list">
        <transition-group name="list">
          <TodoCard
            v-for="task in tasks"
            :key="task.id"
            :task="task"
          ></TodoCard>
        </transition-group>

        <div></div>
      </div>
    </div>
    <div v-else class="text-center mt-5">
      <h1 class="text-center">Add your first todo job for today!</h1>
      <my-button
        @click="this.$router.push('/create')"
        class="d-flex align-items-center justify-content-center"
        >Create new task</my-button
      >
    </div>
  </div>
</template>

<script>
import TodoCard from "./TodoCard.vue";
import MyButton from "./UI/MyButton.vue";
export default {
  components: { TodoCard, MyButton },

  data() {
    return {
      tasks: [],
      selectedFilter: "",
      searchQuery: "",
    };
  },
  methods: {
    filter() {
      this.tasks = this.$store.getters.filteredTasks(this.selectedFilter);
    },
    findTask() {
      this.tasks = this.$store.getters.searchTasks(
        this.searchQuery,
        this.selectedFilter
      );
    },
    clear() {
      this.selectedFilter = "";
      this.searchQuery = "";
      this.filter();
      this.findTask();
    },
  },
  watch: {
    selectedFilter() {
      this.filter();
    },
  },
  computed: {
    allTasks() {
      return this.$store.getters.allTasks;
    },
  },
  created() {
    this.tasks = this.$store.getters.allTasks;
  },
};
</script>

<style scoped>
.list {
  padding: 10px 70px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transform: all 0.4s ease-in-out;
}
</style>
