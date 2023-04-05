import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FirstView from "../views/FirstView.vue";
import SecondView from "../views/SecondView.vue";
import ThirdView from "../views/ThirdView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/first",
    name: "first",
    component: FirstView,
  },
  {
    path: "/second",
    name: "second",
    component: SecondView,
  },
  {
    path: "/third",
    name: "third",
    component: ThirdView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
