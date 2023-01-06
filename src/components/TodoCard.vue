<template>
  <div
    class="task-card mt-5"
    :style="{ background: task.color, color: task.colorText }"
    v-if="
      $store.getters.allTasks.indexOf(task) != -1 ||
      $store.getters.allDoneTasks.indexOf(task) != -1
    "
  >
    <div :class="{ doneTask: $store.getters.allDoneTasks.indexOf(task) != -1 }">
      <h5>{{ task.title }}</h5>
      <h5 style="font-style: italic">{{ task.description }}</h5>
      <div class="mt-4">
        <h4 v-if="task.date" style="color: #4e966e">
          <i class="fa fa-calendar-check-o me-2" aria-hidden="true"></i>
          <span>{{ getYearAndDayFromDate(task.date) }}</span>
        </h4>
        <h4 style="color: #4e966e">
          <i class="fa fa-tag me-2" aria-hidden="true"></i>
          <span> {{ task.category }}</span>
        </h4>
      </div>
    </div>
    <div class="buttons" v-if="$store.getters.allTasks.indexOf(task) != -1">
      <i
        class="fa-solid fa-check"
        @click="addToDone(task)"
        style="color: RGB(175, 35, 80)"
      ></i>
      <i
        class="fa-solid fa-trash-can"
        @click="removeTask(task.id)"
        style="color: RGB(175, 35, 80)"
      ></i>
    </div>
  </div>
</template>

<script>
import { POSITION, useToast } from "vue-toastification";
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {};
  },
  methods: {
    removeTask(id) {
      this.$store.dispatch("removeTask", id);
      this.toast.warning("You deleted this task", {
        timeout: 2000,
        position: POSITION.BOTTOM_RIGHT,
      });
    },
    addToDone(task) {
      this.$store.dispatch("addToDone", task);
    },
    getYearAndDayFromDate(date) {
      return new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
};
</script>

<style scoped>
.doneTask {
  text-decoration: line-through;
}

.task-card {
  color: #b2bbc0;
  padding: 10px 40px;
  background-color: rgb(36, 36, 53);
  border-radius: 20px;
  margin-bottom: 20px;
  -webkit-box-shadow: 24px 12px 18px 0px rgba(204, 75, 75, 0.2);
  -moz-box-shadow: 24px 12px 18px 0px rgba(204, 75, 75, 0.2);
  box-shadow: 24px 12px 18px 0px rgb(105, 23, 49);
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-card h5 {
  font-size: 1.5rem;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 775px) {
  .buttons {
    display: block;
    margin-top: 20px;
  }
  .task-card {
    display: block;
  }
}

@media (max-width: 550px) {
  .task-card h5 {
    font-size: 1.2rem;
  }

  .fa-solid {
    font-size: 1em;
  }
}

.task-card:hover {
  transform: scale(1.05);
  transition: 0.2s;
}

.fa-solid {
  margin-right: 20px;
  font-size: 1.5em;
  cursor: pointer;
  transition: 0.2s;
  opacity: 100%;
}

.fa-solid:hover {
  transition: 0.2s;
  opacity: 50%;
}
</style>
