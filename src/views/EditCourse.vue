<script setup>
import { ref, onMounted } from "vue";
import CourseServices from "../services/courseServices";
import { useRouter } from "vue-router";
import courseServices from "../services/courseServices";

const router = useRouter();
const valid = ref(false);
const Course = ref({});
const message = ref("Enter data and click save");

const props = defineProps({
  id: {
    required: true,
  },
});
const updateCourse = async () => {
  const data = {
    title: Course.value.title,
    description: Course.value.description,
  };
  try {
    const response = await CourseServices.update(props.id, data);
    Course.value.id = response.data.id;
    router.push({ name: "Courses" });
  } catch (e) {
    message.value = e.response.data.message;
  }
};

const cancel = () => {
  router.push({ name: "Courses" });
};

onMounted(() => {
  retrieveCourse();
});
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
        <v-toolbar-title>Course Edit</v-toolbar-title>
      </v-toolbar>
      <br />
      <h4>{{ message }}</h4>
      <br />
      <v-form ref="form" v-model="valid" lazy validation>
        <v-text-field
          v-model="Course.title"
          id="title"
          :counter="50"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="Course.description"
          id="description"
          :counter="50"
          label="Description"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="updateCourse()"
        >
          Save
        </v-btn>

        <v-btn color="error" class="mr-4" @click="cancel()"> Cancel </v-btn>
      </v-form>
    </v-container>
  </div>
</template>
