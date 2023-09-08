<template>
    <section class="py-8 flex flex-col items-center w-full">
      
    </section>
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
        type: Object as PropType<Feature>
      },
    },
    components: {
      TypeHeader,
      TypeSubHeader,
      TypeBody,
    },
  });
  </script>