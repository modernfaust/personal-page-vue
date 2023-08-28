<template>
    <div class="py-8 flex flex-col items-center w-full">
      <TypeHeader class="text-blue-900" tag="h1" variant="peta" weight="strong">Projects</TypeHeader>
      <div v-for="(item,index) in projects" class="flex flex-col items-center w-2/3 lg:w-1/2">
        <FeatureCard
          :image="item.image"
          :name="item.projectName"
          :languages="item.languages"
          :description="item.description"
        />
        <BaseDivider v-if="index != projects.length - 1"/>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue/types/v3-define-component";
  import { PropType } from "vue/types";
  import FeatureCard from "./FeatureCard.vue";
  import { ProjectItem } from "../constants/interfaces.ts";
  import BaseDivider from "./BaseDivider.vue";
  import TypeHeader from "./TypeHeader.vue";

  export default {
    name: "Projects",
    props: {
      projects: {
        type: Array<ProjectItem>,
        default:[],
      },
    },
    components: {
      FeatureCard,
      BaseDivider,
      TypeHeader
    },
  };
  </script>
  <style></style>
  