import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/components/Layout/Layout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/libros",
        name: "Libros",
        component: () => import("../views/Libros.vue"),
      },
      {
        path: "/editoriales",
        name: "Editoriales",
        component: () => import("../views/Editoriales.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
