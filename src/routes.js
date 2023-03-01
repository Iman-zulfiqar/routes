import { createWebHashHistory, createRouter } from "vue-router";
import home from "./components/home.vue";
import login from "./components/login.vue";
import footer from "./components/footer.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: home,
  },
  {
    name: "login",
    path: "/login",
    component: login,
  },
  {
    name: "footer",
    path: "/footer",
    component: footer,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
