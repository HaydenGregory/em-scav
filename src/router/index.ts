import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FirstView from "../views/FirstView.vue";
import SecondView from "../views/SecondView.vue";
import ThirdView from "../views/ThirdView.vue";
import HomeVideoViewVue from "@/views/HomeVideoView.vue";
import PartyView from "@/views/PartyView.vue";

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
  {
    path: "/homevideo",
    name: "homevideo",
    component: HomeVideoViewVue,
  },
  {
    path: "/party",
    name: "party",
    component: PartyView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
