<template>
  <div>
    <div class="form-create">
      <label for=""
        >Enter the title of your task
        <span style="color: RGB(175, 35, 80)">(required)</span></label
      >
      <input
        v-model.trim="title"
        placeholder="Title"
        type="text"
        class="fs-2 form-control mb-3"
        floatingInput
        required
      />
      <label for=""
        >Enter the description of your task
        <span style="color: #4e966e">(non-required)</span></label
      >
      <input
        v-model.trim="description"
        placeholder="Description"
        type="text"
        class="fs-2 form-control mb-3"
      />
      <label for=""
        >Enter the date of your task
        <span style="color: #4e966e">(non-required)</span></label
      >
      <input
        v-model.trim="date"
        placeholder="Date of completion"
        type="date"
        class="fs-2 form-control"
      />
    </div>
    <h1 class="text-center mt-5">Choose category of task</h1>
    <div class="form-radio">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          value="Personal"
          v-model="category"
          checked
        />
        <label class="form-check-label" for="inlineRadio1">Personal</label>
      </div>
      <div class="form-check form-check">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          v-model="category"
          value="Work"
        />
        <label class="form-check-label" for="inlineRadio2">Work</label>
      </div>
      <div class="form-check form-check">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          v-model="category"
          value="Fun"
        />
        <label class="form-check-label" for="inlineRadio3">Fun</label>
      </div>
      <div class="form-check form-check">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          v-model="category"
          value="Education"
        />
        <label class="form-check-label" for="inlineRadio4">Education</label>
      </div>
    </div>
    <div>
      <div class="d-flex align-items-center justify-content-center">
        <i
          class="fa-solid fa-square-plus"
          aria-hidden="true"
          @click="addTask"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import { POSITION, useToast } from "vue-toastification";
export default {
  components: { MyButton },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      title: "",
      description: "",
      date: "",
      color: "",
      colorText: "",
      category: "Personal",
    };
  },
  methods: {
    addTask() {
      const newTask = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        date: this.date,
        color: this.color,
        colorText: this.colorText,
        category: this.category,
      };
      if (newTask.title !== "") {
        this.$store.dispatch("addTask", { ...newTask });
        this.title = "";
        this.description = "";
        this.date = "";
        this.color = "";
        this.colorText = "";
        this.category = "Nothing doesn't choose";
        this.toast.success("You have added a new task!", {
          timeout: 3000,
          position: POSITION.BOTTOM_RIGHT,
        });
      } else
        this.toast.error("You need to set a title for task!", {
          timeout: 3000,
          position: POSITION.BOTTOM_RIGHT,
        });
    },
  },
};
</script>

<style scoped>
.form-create label {
  font-size: 20px;
  margin-bottom: 5px;
  color: #35353c;
}

.fa-square-plus {
  color: #af2350;
  font-size: 100px;
  cursor: pointer;
  transition: 0.4s;
}

.fa-square-plus:hover {
  color: #912043;
  transform: rotate(180deg);
  transition: 0.4s;
}

.form-radio {
  font-size: 20px;
  margin-bottom: 50px;
  margin-top: 25px;
  border-top: 1px solid #912043;
  padding: 20px;
  transition: 0.2s;
}
</style>
