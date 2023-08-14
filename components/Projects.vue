<template>
    <div>
      <div v-for="item in projects" class="flex flex-col items-center">
        <FeatureCard
          :image="item.image"
          :name="item.projectName"
          :languages="item.languages"
          :description="item.description"
        />
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue/types/v3-define-component";
  import { PropType } from "vue/types";
  import FeatureCard from "./FeatureCard.vue";
  import { ProjectItem } from "../constants/interfaces.ts";
  
  export default {
    name: "Projects",
    props: {
      projects: {
        type: Array<ProjectItem>,
      },
    },
    components: {
      FeatureCard,
    },
  };
  </script>
  <style></style>
  