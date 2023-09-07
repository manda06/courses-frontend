<script setup>
import CourseServices from "../services/courseServices";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const user = Utils.getStore("user");
const message = ref("Search, Edit or Delete Courses");

const editCourse = (course) => {
  router.push({ name: "edit", params: { id: course.id } });
};

const viewCourse = (course) => {
  router.push({ name: "view", params: { id: course.id } });
};

const deleteCourse= (course) => {
  CourseServices.delete(course.id)
    .then(() => {
      retrieveCourse();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const retrieveCourse = () => {
  CourseServices.getAll()
    .then((response) => {
      courses.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveCourse();
</script>

<template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title
          >Hello!</v-toolbar-title
        >
      </v-toolbar>
      <br /><br />
      <v-card>
        <v-card-title> Courses </v-card-title>
        <v-card-text>
          <b>{{ message }}</b> 
        </v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Description</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in courses" :key="item.title">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>
                <v-icon small class="mx-4" @click="editCourse(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="viewCourse(item)">
                  mdi-format-list-bulleted-type
                </v-icon>
                <v-icon small class="mx-4" @click="deleteCourse(item)">
                  mdi-trash-can
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
  </div>
</template>
