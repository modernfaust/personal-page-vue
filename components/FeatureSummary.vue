<template>
    <div class="p-16 flex flex-col items-center w-full laptop:px-72" :class="variant === 'dark' ? 'bg-gray-200': ''">
      <div class="flex flex-col gap-4 items-center max-w-[1280px]">
        <TypeSubHeader class="text-blue-900" tag="h3" weight="strong" variant="large">{{ feature.subheader }}</TypeSubHeader>
        <TypeHeader class="text-blue-900" tag="h1" variant="tera" weight="strong">{{ feature.header }}</TypeHeader>
        <TypeBody class="text-blue-900 text-center" variant="large">{{ feature.description }}</TypeBody>
      </div>
      
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { Feature } from "@/constants/interfaces";
  import TypeHeader from "@/components/TypeHeader.vue";
  import TypeSubHeader from "./TypeSubHeader.vue";
  import TypeBody from "./TypeBody.vue";
  
  export default defineComponent({
    name: "FeatureSummary",
    props: {
      feature: {
        type: Object as PropType<Feature>,
      },
      variant: {
        type: String as PropType<string>,
        default: 'light',
      },
    },
    components: {
      TypeHeader,
      TypeSubHeader,
      TypeBody,
    },
  });
  </script>