import { createRouter, createWebHistory } from "vue-router";
import Sources from "@/views/Sources.vue";

const routes = [
  {
    path: "/",
    name: "SourcesView",
    component: Sources,
    alias: "/sources",
  },
  {
    path: "/sources/:sourceId",
    name: "SourceView",
    component: () =>
      import(/* webpackChunkName: "source" */ "@/views/Source.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/sources/create",
    name: "CreateTermView",
    component: () =>
      import(/*webpackChunkName : "create"*/ "@/views/Create.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
