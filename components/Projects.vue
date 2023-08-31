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
  import FeatureCard from "@/components/FeatureCard.vue";
  import { ProjectItem } from "@/constants/interfaces.js";
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    name: "Projects",
    props: {
      projects: {
        type: Array as PropType<Array<ProjectItem>>
      },
    },
    components: {
      FeatureCard,
    },
  });
  </script>
  <style></style>
  