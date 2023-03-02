import { createWebHashHistory, createRouter } from "vue-router";
import home from "./components/home.vue";
// import login from "./components/login.vue";
import footer from "./components/footer.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: home,
    meta: {
      isAuth: false,
    },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("./components/login.vue"),
    meta: {
      isAuth: false,
    },
  },
  {
    name: "footer",
    path: "/footer",
    component: footer,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/destination:id",
    component: () => import("./components/desstination.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (JSON.parse(localStorage.getItem("books"))) {
    next();
    localStorage.setItem("books", JSON.stringify(false));
  }
  if (to.meta.isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
