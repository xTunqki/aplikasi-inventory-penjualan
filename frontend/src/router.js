import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/items",
      component: () => import("./views/Item.vue"),
    },
    {
      path: "/items/new",
      component: () => import("./views/items/Add.vue"),
    },
    {
      path: "/sales",
      component: () => import("./views/Sales.vue"),
    },
    {
        path: "/sales/new",
        component: () => import("./views/sales/Add.vue"),
    },
    {
      path: "/customers",
      component: () => import("./views/Customer.vue"),
    },
    {
        path: "/customers/new",
        component: () => import("./views/customers/Add.vue"),
    },
  ],
});
