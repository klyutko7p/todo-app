import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from "@/router/router";
import store from './store';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

store.subscribe( (mutation, state) => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));  
    localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks));  
})

const options = {
    
};


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})



app
    .use(router)
    .use(store)
    .use(Toast, options)
    .mount('#app');

