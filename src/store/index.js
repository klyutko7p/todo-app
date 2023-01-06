import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      { title: "Try to get happy :)", description: "Best wishes, Daniel", date: "2020-9-14", category: "Personal" }
    ],
    doneTasks: [],
    categories: ["Personal", "Work", "Fun", "Education"]
  },
  getters: {
    allTasks(state) {
      return state.tasks
    },
    allDoneTasks(state) {
      return state.doneTasks
    },
    allCategories(state) {
      return state.categories
    },
    filteredTasks: (state) => (category) => {
      let tasks = state.tasks
            if (category) {
                tasks = tasks.filter(task => task.category === category)
          }
        return tasks
    },
    searchTasks: (state) => (title) => {
          let tasks = state.tasks
          if (title) {
            tasks = tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase()))
      }
          return tasks
    },      
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload
    },
    setDoneTasks(state, payload) {
      state.doneTasks = payload
    },


    ADD_TASK(state, payload) {
      state.tasks.push(payload)
    },
    REMOVE_TASK(state, payload) {
      state.tasks = state.tasks.filter((p) => p.id !== payload);
    },
    ADD_TO_DONE(state, payload) {
      state.doneTasks.push(payload)
      state.tasks = state.tasks.filter((p) => p.id !== payload.id);
    },

    
    initializeVars(state) {
      if (localStorage.getItem('tasks')) {
        state.tasks = JSON.parse(localStorage.tasks)
        if (localStorage.getItem('doneTasks'))
          state.doneTasks = JSON.parse(localStorage.doneTasks)
      }
    },
  },
  actions: {
    addTask({commit}, task) {
        commit('ADD_TASK', task)
    },
    removeTask({commit}, id) {
      commit('REMOVE_TASK', id)
    },
    addToDone({ commit }, task) {
      commit('ADD_TO_DONE', task)
    },
  },
  modules: {
  }
  
})
