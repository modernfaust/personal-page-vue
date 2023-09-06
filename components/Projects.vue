<template>
    <section class="py-8 flex flex-col items-center w-full">
      <TypeHeader class="text-blue-900" tag="h1" variant="peta" weight="strong">Projects</TypeHeader>
      <div v-for="(item,index) in projects" class="flex flex-col items-center w-2/3 laptop:w-1/2">
        <FeatureCard
          :image="item.image"
          :name="item.projectName"
          :languages="item.languages"
          :description="item.description"
        />
        <BaseDivider v-if="index != projects.length - 1"/>
      </div>
    </section>
  </template>
  <script lang="ts">
  import FeatureCard from "@/components/FeatureCard.vue";
  import { ProjectItem } from "@/constants/interfaces.js";
  import BaseDivider from "@/components/BaseDivider.vue";
  import TypeHeader from "@/components/TypeHeader.vue";
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
      BaseDivider,
      TypeHeader
    },
  });
  </script>
  <style></style>
  