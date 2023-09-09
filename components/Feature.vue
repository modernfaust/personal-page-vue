<template>
    <section class="py-8 flex flex-col items-center w-full">
      <img class="w-[320px]" :src="feature?.avatar" :alt="feature?.avatarAlt"/>
      <img class="w-[640px] pt-8" :src="feature?.image" :alt="feature?.alt"/> 
      <FeatureSummary :feature="feature" variant="dark"/>
    </section>
  </template>
  <script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { Feature } from "@/constants/interfaces";
  import FeatureSummary from "./FeatureSummary.vue";
  import TypeHeader from "@/components/TypeHeader.vue";
  import TypeSubHeader from "./TypeSubHeader.vue";
  import TypeBody from "./TypeBody.vue";
  
  export default defineComponent({
    name: "Feature",
    props: {
      feature: {
        type: Object as PropType<Feature>
      },
    },
    components: {
      TypeHeader,
      TypeSubHeader,
      TypeBody,
      FeatureSummary,
    },
  });
  </script>