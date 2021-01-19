import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import CountryDetail from "../components/CountryDetail.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/countrydetail/:name",
    name: "CountryDetail",
    prop: true,
    component: CountryDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
