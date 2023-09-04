import { createRouter, createWebHistory } from "vue-router";

import CourseList from "./views/CourseList.vue";
import EditCourse from "./views/EditCourse.vue";
import AddTutorial from "./views/AddTutorial.vue";
import ViewCourse from "./views/ViewCourse.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/courses",
      name: "courses",
      component: CourseList,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditCourse,
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
