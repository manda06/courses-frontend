import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";

import CourseList from "./views/CourseList.vue";
import EditTutorial from "./views/EditTutorial.vue";
import AddTutorial from "./views/AddTutorial.vue";
import ViewCourse from "./views/ViewCourse.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/courses",
      name: "courses",
      component: CourseList,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditTutorial,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: AddTutorial,
    },
    {
      path: "/view/:id",
      name: "view",
      component: ViewCourse,
      props: true,
    },
  ],
});

export default router;
